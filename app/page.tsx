// import AgentCard from "./components/agent/AgentCard";
// import ContractCard from "./components/contract/ContractCard";
import RegisterForm from "./components/register/RegisterForm";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        {/* <AgentCard />
        <ContractCard /> */}
        <RegisterForm />
      </div>
    </main>
  );
}
