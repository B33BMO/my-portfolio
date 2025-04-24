import Link from "next/link";
import PageWrapper from "../PageWrapper";
import { FaDiscord, FaSteam } from "react-icons/fa";

export default function Home() {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <h1 className="text-4xl font-bold mb-8">Connect with Me</h1>
        <div className="flex space-x-6">
          <a
            href="https://discord.com/invite/YOUR_INVITE_CODE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaDiscord size={40} />
          </a>
          <a
            href="https://steamcommunity.com/id/YOUR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaSteam size={40} />
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}