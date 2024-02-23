import {
  Footer,
  FooterCopyright,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterWrapper() {
  return (
    <Footer bgDark className="rounded-none">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
          <div>
            <FooterTitle title="about" />
            <FooterLinkGroup col>
              <FooterLink href="#">Flowbite</FooterLink>
              <FooterLink href="#">Tailwind CSS</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Follow us" />
            <FooterLinkGroup col>
              <FooterLink href="#">Github</FooterLink>
              <FooterLink href="#">Discord</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="Legal" />
            <FooterLinkGroup col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
              <FooterLink href="https://web3templates.com">
                Made By Web3Templates
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Astroship™" year={2024} />

          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
