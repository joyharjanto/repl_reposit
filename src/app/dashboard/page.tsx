import MaxWidthWrapper from "../../components/MaxWidthWrapper";
import Image from "next/image";
import thumbnail from "/public/video_1.png";
import Link from "next/link";

const Page = () => {
	return (
		<>
			<MaxWidthWrapper>
				<div className="mx-auto mb-10 sm:max-w-lg">
					<h1 className="text-6xl font-bold sm:text-7xl">Dashboard</h1>
					<p className="mt-5 text-gray-600 sm:text-lg">
						Welcome to your dashboard.
					</p>
				</div>
				<section className="grid grid-cols-2 gap-8">
					<Link href="/clips" className="hover:scale-105 transition-transform">
						<Image
							src={thumbnail}
							alt="Sam Altman - How to succeed with a startup"
						/>
						<p className="text-lg mt-2">
							Sam Altman - How to succeed with a startup
						</p>
					</Link>
				</section>
			</MaxWidthWrapper>
		</>
	);
};

export default Page;
