import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fetchWrapper } from "../lib/fetchHostname";
import { cookies } from "next/headers";
import "./style.css";
import Link from 'next/link';
import { useState } from 'react';

const postVideo = async (url: string) => {
	const accessToken = cookies().get("access_token")?.value;
	// const res = await fetchWrapper("/api/videos/create", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Authorization: `Bearer ${accessToken}`,
	// 	},
	// 	body: JSON.stringify({ video_url: url }),
	// });
	// return res.json();
	console.log("home pg access token", accessToken);
	return {
		"key": "success"
	}
};

export default async function Home() {
	console.log("we are in the home page");
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	const handleSubmit = async (formData: FormData) => {
		"use server";
		if (!user) {
			//redirect("https://tally.so/r/w2NrEg");
			redirect("/api/auth/register?post_login_redirect_url=/");
		}

		const url = formData.get("url") as string;
		// const response = await postVideo(url);

		redirect(`/loading?url=${url}`);
	};

	const featureList = [
		"Short Shorts",
		"Engaged Visuals",
		"Smart Chapter Selection",
		"Automatic Speaker Detection",
		"Quick Processing Time",
		"Auto-generated Subtitles",
	];
	const descriptionList = [
		"We keep every short actually short, so you can enjoy a higher % of watch time",
		"Clips are edited with subtle effects to keep audience engaged",
		"We use ML to select the most show-stopping portion of your video",
		"The video is centered on the speaker even as they move around",
		"It takes less than 15 minutes to get all your clips",
		"We also offer auto-generated subtitles to boost your video watch time",
	];

	return (
		<>
			<div className="backgColorStyle">
				<MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
					<div className="gap mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
						<p className="text-sm font-semibold text-gray-700">
							<a href="https://tally.so/r/w2NrEg">Join Our Waitlist</a>
						</p>
					</div>
					<h1 className="whiteFont max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
						Magically Generate <br></br> <span className="custom">Shorts</span>{" "}
						From Your <span className="custom">Videos!</span>
					</h1>
					<p className="greyFont noto-sans-mono-font  mt-5 max-w-prose text-zinc-700 sm:text-lg">
						Spaceclips uses state-of-the-art AI to generate shorts <br></br>
						Simply paste a Youtube Link and we&apos;ll do the rest
					</p>
					<form
						className="flex w-full max-w-xl py-5 items-center space-x-3"
						action={handleSubmit}>
						<Input type="url" name="url" className="whiteFont" placeholder="Drop a Youtube Link!" />
						<button
							className={
								buttonVariants({ size: "lg" }) + " whitespace-nowrap text-base"
							}>
							Get started <ArrowRight className="ml-2 h-5 w-5" />
						</button>
					</form>
				</MaxWidthWrapper>

				{/* value proposition section */}
				<div className="relative isolate">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
						<div
							style={{
								clipPath:
									"polygon(100.1% 60.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						/>
						<div className="relative left-[calc(50%+12rem)] aspect-[1155/678] w-[38rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-bl from-[#8a80ff] to-[#ff80cc] opacity-10 sm:left-[calc(50%+32rem)] sm:w-[74rem]" />
					</div>
				</div>

				<div
					style={{
						alignItems: "center",
						display: "flex",
						justifyContent: "center",
					}}>
					<div className="mx-auto max-w-6xl px-6 lg:px-8 gap">
						<video
							width="1000"
							height="250"
							controls
							autoPlay
							loop
							muted
							style={{ borderRadius: "20px" }}>
							<source src="/spaceclips_promo.mp4" type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</div>
				</div>

				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-5 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
					/>
				</div>

				{/* Feature section */}
				<div className="mx-auto mb-32 mt-32 max-w-6xl sm:mt-30 ">
					<div className="mb-12 px-6 lg:px-8">
						<div className="mx-auto max-w-3xl sm:text-center">
							<h2 className="mt-2 font-bold text-4xl whiteFont lexend-font sm:text-5xl">
								We Know How To Make <br></br>A{" "}
								<span style={{ backgroundColor: "#490060" }}>
									<i>Good</i>
								</span>{" "}
								Short
							</h2>
							<p className="greyFont noto-sans-mono-font  mt-5 max-w-prose text-zinc-700 text-xl sm:text-2xl">
								By Creators, For Creators
							</p>
						</div>
					</div>
					<div
						style={{
							alignItems: "center",
							display: "flex",
							justifyContent: "center",
						}}>
						<div className="mx-auto max-w-6xl px-6 lg:px-8 gap">
							<video
								width="1000"
								height="250"
								controls
								autoPlay
								loop
								muted
								style={{ borderRadius: "20px" }}>
								<source src="/spaceclips_steps.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>
							{/* </div> */}
						</div>
					</div>
				</div>

				<div className="mx-auto max-w-6xl px-6 lg:px-8">
					<div className="min-h-[100vh]">
						<div className="gap"></div>
						<div className="gap"></div>

						<h2
							className="mt-2 font-bold text-4xl whiteFont lexend-font sm:text-5xl sm:text-center"
							style={{ textAlign: "center" }}>
							<span className="custom">Built</span> By A{" "}
							<span style={{ backgroundColor: "#490060" }}>Team</span> From
						</h2>
						<div className="gap"></div>
						<div className="gap"></div>
						<div className="scroll">
							<div className="m-scroll">
								<span
									style={{
										marginRight: "50px",
										width: "250px",
										height: "100px",
										display: "inline-block",
									}}>
									<img src="/ucla.png" style={{ height: "100px" }} />
								</span>
								<span
									style={{
										marginRight: "10px",
										width: "150px",
										height: "100px",
										display: "inline-block",
									}}>
									<img src="/cornell.png" style={{ height: "100px" }} />
								</span>
								<span
									style={{
										marginRight: "50px",
										width: "400px",
										height: "100px",
										display: "inline-block",
									}}>
									<img src="/bloomberg.png" style={{ height: "100px" }} />
								</span>
							</div>
						</div>
						<div className="gap"></div>
						<div className="gap"></div>
						<div className="gap"></div>

						<div className="mx-auto max-w-6xl px-6 lg:px-8">
							<div className="mx-auto max-w-3xl sm:text-center">
								<h2 className="mt-2 font-bold text-4xl whiteFont lexend-font sm:text-5xl">
									Supercharge Your{" "}
									<span style={{ backgroundColor: "#490060" }}>
										<i>Workflow </i>
									</span>
									<br></br>
									With These Features
								</h2>
								<p className="greyFont noto-sans-mono-font  mt-5 max-w-prose text-zinc-700 text-xl sm:text-2xl">
									Get Hours Back Every Week
								</p>
							</div>
						</div>
						<div className="gap"></div>
						<div className="container">
							{featureList.map((item, index) => (
								<div className="box" key={`feature-${index}`}>
									<div className="text poppins-bold-grey header">{item}</div>
									<br></br>
									<div className="text description noto-sans-mono-font greyFont">
										{descriptionList[index]}
									</div>
								</div>
							))}
						</div>
					</div>

					<MaxWidthWrapper className="flex flex-col items-center justify-center text-center">
						<div className="gap"></div>
						<p className="greyFont noto-sans-mono-font  mt-5 max-w-prose text-zinc-700 sm:text-lg">
							Currently only supporting speech-based videos <br></br>Simply
							paste a Youtube Link and we&apos;ll do the rest
						</p>
						<form
							className="flex w-full max-w-xl py-5 items-center justify-center space-x-3"
							action={handleSubmit}>
							<button
								className={
									buttonVariants({ size: "lg" }) +
									" whitespace-nowrap text-base"
								}>
								<a href="https://tally.so/r/w2NrEg">
									Sign Up For Our Waitlist{" "}
								</a>
								<ArrowRight className="ml-2 h-5 w-5" />
							</button>
						</form>
						<p className="greyFont noto-sans-mono-font  mt-5 max-w-prose text-zinc-700 sm:text-lg">
							Find us at spacebets24@gmail.com
							<br></br>
							Copyright Spaceclips Inc
							<br></br>
							<Link href="/privacy" className="yellowFont">
							Privacy Policy
							</Link>
							<br></br>
							Built in New York City
						</p>
						<div className="gap"></div>
					</MaxWidthWrapper>
				</div>
			</div>
		</>
	);
}
