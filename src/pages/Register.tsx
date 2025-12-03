import { useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import Button from "../ui/Button";
import Registration from "../components/Registration";
import { Slide } from "../animation/Slide";

const Register = () => {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();

	return (
		<div className="bg-background md:px-5 min-h-screen h-full">
			{searchParams.get("surveyCompleted") === "true" ? (
				<Registration />
			) : (
				<div className="bg-gray-50 flex justify-center px-5 py-20">
					<div className="max-w-4xl w-full text-center">
						<div className="space-y-6 mb-12">
							<span className="py-2 text-sm px-5 rounded-full bg-lightPrimary text-primary font-semibold mb-8">
								AfCFTA Digital Trade Platform
							</span>
							<Slide>
								<h1 className="lg:text-6xl md:text-5xl text-3xl font-bold">AfCFTA Readiness Survey</h1>
							</Slide>
							<Slide>
								<p className="lg:text-2xl md:text-xl text-lg text-gray font-medium">
									Before you register, please complete this 12-question readiness assessment. It helps us determine if
									your business is fully prepared to participate in AfCFTA trade.
								</p>
							</Slide>
						</div>

						<Slide delay={0.5} className="flex justify-center">
							<Button onClick={() => navigate("/survey")} className="flex items-center gap-2 group">
								Begin Assessment
								<FaArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
							</Button>
						</Slide>
					</div>
				</div>
			)}
		</div>
	);
};

export default Register;
