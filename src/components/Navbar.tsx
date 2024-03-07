import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import {
	LoginLink,
	getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import MobileNav from "./MobileNav";
import UserAccountNav from "./UserAccountNav";
import Image from "next/image";

const Navbar = async () => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link href="/" className="flex z-40 font-semibold">
						<Image
							src={"/thumbnail-2.png"}
							alt="profile picture"
							referrerPolicy="no-referrer"
							width={140}
							height={30}
							className="rounded-lg"
						/>
					</Link>

					<MobileNav isAuth={!!user} />

					<div className="hidden items-center space-x-8 sm:flex">
						{!user ? (
							<>
								<Link
									href="/pricing"
									className={buttonVariants({
										variant: "ghost",
										className: "text-base",
										size: "sm",
									})}>
									Pricing
								</Link>
								<LoginLink
									href="https://tally.so/r/w2NrEg"
									className={buttonVariants({
										variant: "default",
										className: "text-base",
										size: "sm",
									})}>
									Sign in
								</LoginLink>
							</>
						) : (
							<>
								<Link
									href="/dashboard"
									className={buttonVariants({
										variant: "ghost",
										className: "text-base",
										size: "sm",
									})}>
									Dashboard
								</Link>
								<UserAccountNav
									name={
										!user.given_name || !user.family_name
											? "Your Account"
											: `${user.given_name} ${user.family_name}`
									}
									email={user.email ?? ""}
									imageUrl={user.picture ?? ""}
								/>
							</>
						)}
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
