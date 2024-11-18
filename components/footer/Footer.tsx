import Link from "next/link";
import React from "react";
import Instagram from "../icons/instagram/Instagram";
import Linkedin from "../icons/linkedin/Linkedin";
import Facebook from "../icons/facebook/Facebook";

const Footer = () => {
  return (
    <footer className="bg-[#302F38] w-[120rem] h-[30rem]  text-white py-10">
      <div className="max-w-7xl w-[80rem] h-[20rem] mx-auto mt-[6rem]  mb-[1.5px]  grid grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-lg font-bold mb-4">Weather & Climate</h3>
          <div className="space-y-2 font-normal text-lg">
            <Link href="/forecast" className="hover:underline block">
              Find a forecast
            </Link>
            <Link href="/warnings" className="hover:underline block">
              Warnings & advice
            </Link>
            <Link href="/maps" className="hover:underline block">
              Maps & charts
            </Link>
            <Link href="/climate" className="hover:underline block">
              Climate
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
          <div className="space-y-2 font-normal text-lg">
            <Link href="/government" className="hover:underline block">
              Government
            </Link>
            <Link href="/transport" className="hover:underline block">
              Transport
            </Link>
            <Link href="/business" className="hover:underline block">
              Business & industry
            </Link>
            <Link href="/data" className="hover:underline block">
              Dat
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Policies</h3>
          <div className="space-y-2 font-normal text-lg">
            <Link href="/accessibility" className="hover:underline block">
              Accessibility
            </Link>
            <Link href="/cookies" className="hover:underline block">
              Cookies
            </Link>
            <Link href="/privacy" className="hover:underline block">
              Privacy
            </Link>
          </div>

          <div className="flex items-center  space-x-4 mt-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:opacity-80"
            >
              <Instagram />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:opacity-80"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:opacity-80"
            >
              <Facebook />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Subscribe Us</h3>
          <button className="bg-[#549FB6] w-[16rem] h-[3.3rem] rounded-[14px] text-white py-2 px-6  hover:bg-[#3697bd]">
            Subscribe
          </button>
        </div>

        <div className="border-t w-[80rem] border-[#ADADC3] mt-7 pt-6 text-center text-sm">
          <div className="text-left py-auto pb-2">© Crown Copyright</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
