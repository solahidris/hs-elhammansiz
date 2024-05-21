import { useState, useEffect } from "react";
import Image from "next/image";
import WhileInViewAnimation from "@/components/WhileInViewAnimation";
import WhileInViewAnimationFromLeft from "@/components/WhileInViewAnimationFromLeft";
import WhileInViewAnimationFromRight from "@/components/WhileInViewAnimationFromRight";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import MarqueeInfiniteSlider from "@/components/MarqueeInfiniteSlider";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { scrollToSection } from "@/functions/scrollToSection";
import HeaderMenu from "@/components/HeaderMenu";
import FooterMenu from "@/components/FooterMenu";

const PrivacyPolicyPage = () => {

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* HEADER COMPONENT */}
      <HeaderMenu />

      {/* BODY COMPONENT */}
      <div className="flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full tracking-[2px] pt-10 lg:pt-48">
          <WhileInViewAnimationFromLeft>
            <Image
              src="/location_banner.png"
              alt="image"
              width={800}
              height={800}
              className="w-full max-h-[670px] object-cover object-top"
            />
          </WhileInViewAnimationFromLeft>
          <div className="flex flex-col items-center justify-center text-3xl lg:text-3xl">
            <span className="py-20 lg:py-0">Privacy Policy</span>
          </div>
        </div>

        <div className="w-full p-10 lg:p-40">
          <div>
            <h1 className="text-3xl" >Privacy Policy for Elham Mansiz Resources</h1>

            <h2 className="text-2xl py-4" >Introduction</h2>
            <p>
              Welcome to Elham Mansiz Resources (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). We are
              committed to protecting and respecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website
              <a href="https://www.elhammansiz.com">www.elhammansiz.com</a> (the
              &quot;Site&quot;). Please read this Privacy Policy carefully. If you do not
              agree with the terms of this Privacy Policy, please do not access
              the Site.
            </p>

            <h2 className="text-2xl py-4" >Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The
              information we may collect on the Site includes:
            </p>

            <h3 className="text-xl py-4" >Personal Data</h3>
            <p>
              While using our Site, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl py-4" >Usage Data</h3>
            <p>
              We may also collect information on how the Site is accessed and
              used (&quot;Usage Data&quot;). This Usage Data may include information such
              as your computer&apos;s Internet Protocol (IP) address, browser type,
              browser version, the pages of our Site that you visit, the time
              and date of your visit, the time spent on those pages, unique
              device identifiers, and other diagnostic data.
            </p>

            <h2 className="text-2xl py-4" >Use of Your Information</h2>
            <p>We use the information we collect in the following ways:</p>
            <ul>
              <li>To provide, operate, and maintain our Site</li>
              <li>To improve, personalize, and expand our Site</li>
              <li>To understand and analyze how you use our Site</li>
              <li>
                To develop new products, services, features, and functionality
              </li>
              <li>
                To communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the Site, and for
                marketing and promotional purposes
              </li>
              <li>To process your transactions and manage your orders</li>
              <li>To send you emails</li>
              <li>To find and prevent fraud</li>
            </ul>

            <h2 className="text-2xl py-4" >Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain
              situations. Your information may be disclosed as follows:
            </p>

            <h3 className="text-xl py-4" >By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to
              respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property,
              and safety of others, we may share your information as permitted
              or required by any applicable law, rule, or regulation.
            </p>

            <h3 className="text-xl py-4" >Service Providers</h3>
            <p>
              We may share your information with third-party service providers
              that perform services for us or on our behalf, including payment
              processing, data analysis, email delivery, hosting services,
              customer service, and marketing assistance.
            </p>

            <h3 className="text-xl py-4" >Business Transfers</h3>
            <p>
              We may share or transfer your information in connection with, or
              during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to
              another company.
            </p>

            <h2 className="text-2xl py-4" >Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>

            <h2 className="text-2xl py-4" >Links to Other Websites</h2>
            <p>
              Our Site may contain links to other websites that are not operated
              by us. If you click on a third-party link, you will be directed to
              that third party&apos;s site. We strongly advise you to review the
              Privacy Policy of every site you visit. We have no control over
              and assume no responsibility for the content, privacy policies, or
              practices of any third-party sites or services.
            </p>

            <h2 className="text-2xl py-4" >Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <h2 className="text-2xl py-4" >Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <br/>

            <p>Thank you for visiting Elham Mansiz Resources.</p>

            <address>
              <strong>Elham Mansiz Resources</strong>
              <br />
              Address: Elham Mansiz Resources, 2-2, Jalan Bpp 5/3, Pusat Bandar Putra Permai, 43300 Seri Kembangan, Selangor
              <br />
              Email:{" "}
              <a href="mailto:elhammansiz8848@gmail.com">elhammansiz8848@gmail.com</a>
              <br />
              Phone: +60167138848
            </address>
          </div>
        </div>

        <FooterMenu />
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
