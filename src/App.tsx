import HomeMain from "./components/HomeMain";
import OurCapabilities from "./components/OurCapabilities";
import WhyRegister from "./components/WhyRegister";
import BeginRegistrationProcess from "./components/BeginRegistrationProcess";

function App() {
	return (
		<div className="bg-background md:py-24 py-14 px-5">
			<HomeMain />
			<OurCapabilities />
			<WhyRegister />
			<BeginRegistrationProcess />
		</div>
	);
}
export default App;
