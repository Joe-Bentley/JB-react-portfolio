import React, { useState } from "react";
import PDF from '../assets/Joe-Bentley-CV-2026.pdf';
import Profile_No_Bg from "../assets/jb-profile-color-nobg.png";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="mx-auto p-4 md:h-auto py-2 max-w-[1200px] w-full px-4">
      <div className="grid gap-3 justify-center items-center mx-2 sm:grid-cols-2">
        <img
          src={Profile_No_Bg}
          alt="Profile Pic"
          oncontextmenu="return false;"
        />
        <div>
          <div>
            <ul
              className="flex flex-row flex-wrap pt-3 pb-4 mb-0 list-none dark:text-gray-300"
              role="tablist"
            >
              <li className={`-mb-px mr-2 last:mr-0 flex-auto text-center border-b-4 hover:border-[#FF0000] ${openTab === 1 ? 'border-[#FF0000]' : 'border-gray-300 dark:border-gray-600'}`}>
                <a
                  className="block px-5 py-3 leading-normal uppercase text-1xl"
                  onClick={(e) => { e.preventDefault(); setOpenTab(1); }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Profile
                </a>
              </li>
              <li className={`-mb-px mr-2 last:mr-0 flex-auto text-center border-b-4 hover:border-[#FF0000] ${openTab === 2 ? 'border-[#FF0000]' : 'border-gray-300 dark:border-gray-600'}`}>
                <a
                  className="block px-5 py-3 leading-normal uppercase text-1xl"
                  onClick={(e) => { e.preventDefault(); setOpenTab(2); }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Experience
                </a>
              </li>
              <li className={`-mb-px mr-2 last:mr-0 last:mt-1 flex-auto text-center border-b-4 hover:border-[#FF0000] ${openTab === 3 ? 'border-[#FF0000]' : 'border-gray-300 dark:border-gray-600'}`}>
                <a
                  className="block px-5 py-3 leading-normal uppercase text-1xl"
                  onClick={(e) => { e.preventDefault(); setOpenTab(3); }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Skills
                </a>
              </li>
            </ul>

            <div className="w-full min-w-0 break-words shadow-lg dark:text-gray-300 dark:shadow-black">
              <div className="p-5">

                <div className={openTab === 1 ? "block tab-fade" : "hidden"} id="link1">
                  <div className="space-y-4 text-base leading-relaxed">
                    <p>I'm a Mid-Level Shopify Developer at Charle, a leading Shopify agency, with 4 years of commercial experience delivering bespoke, high-performance ecommerce solutions.</p>
                    <p>I specialise in custom Shopify theme development, scalable architecture, and performance optimisation. My work spans fully bespoke builds, complex feature development, and conversion-focused enhancements for growing brands.</p>
                    <p>My journey into development began with an online, remote bootcamp at Code Nation, which gave me the foundation to pursue a career in software development. <br /> <br /> Prior to joining Charle, I gained agency and in-house ecommerce experience delivering international rollouts, rebuilds, and high-stakes launches. Today, I combine strong technical expertise with client-facing communication and leadership experience to deliver reliable, scalable Shopify solutions.</p>
                    <p>For more information, please see my <a className="underline" target="_blank" rel="noreferrer" href={PDF}>CV</a> or get in touch via the contact form below.</p>
                  </div>
                </div>

                <div className={openTab === 2 ? "block tab-fade" : "hidden"} id="link2">
                  <div className="space-y-3 text-base">
                    <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Mid-Level Shopify Developer <br />Charle | February 2023 – Present</h3>
                    <p>Promoted to Mid-Level Developer in June 2024 in recognition of technical performance and increased project ownership.</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Lead development of bespoke Shopify themes built from scratch</li>
                      <li>Develop scalable, maintainable solutions using Liquid, JavaScript (ES6+), HTML5 and CSS3</li>
                      <li>Implement advanced functionality using metafields, metaobjects, and custom pixels</li>
                      <li>Deliver performance optimisation improvements aligned with Core Web Vitals</li>
                      <li>Contribute to client meetings, technical planning, and solution scoping</li>
                      <li>Mentor junior developers and conduct structured code reviews</li>
                      <li>Deliver accessibility improvements in line with WCAG standards</li>
                      <li>Implement technical SEO enhancements and structured data improvements</li>
                    </ul>
                    <p>Certified in: Creating Solutions for Shopify Checkout; Shopify Development Fundamentals (Verified Skill Badge)</p>
                    <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Junior Shopify Developer <br />eComplete / Naturecan | January 2022 – November 2022</h3>
                    <p>My first professional development role focused on Shopify theme development for both agency clients and internal ecommerce brands.</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Built and maintained Shopify themes for external and internal projects</li>
                      <li>Delivered a major retailer rebuild with a successful on-time Go Live</li>
                      <li>Supported international site rollouts across Asia, America and Europe</li>
                      <li>Worked within Agile methodologies using JIRA, Kanban boards, and sprint planning</li>
                      <li>Managed weekly sprint boards and task prioritisation</li>
                      <li>Maintained and debugged internal websites to ensure platform stability</li>
                      <li>Produced technical documentation to support development workflows</li>
                    </ul>
                  </div>
                </div>

                <div className={openTab === 3 ? "block tab-fade" : "hidden"} id="link3">
                  <div className="space-y-5 text-base">
                    <section>
                      <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Shopify Development</h3>
                      <ul className="space-y-1">
                        <li>Custom Theme Development (Bespoke & OS 2.0)</li>
                        <li>Shopify Liquid (Advanced)</li>
                        <li>Metafields & Metaobjects</li>
                        <li>Shopify Checkout Extensibility</li>
                        <li>Custom Pixels & Event Tracking</li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Front-End</h3>
                      <ul className="space-y-1">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>JSON</li>
                        <li>Storefront API</li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Optimisation & Quality</h3>
                      <ul className="space-y-1">
                        <li>Performance Optimisation & Core Web Vitals</li>
                        <li>Technical SEO Implementation</li>
                        <li>Accessibility (WCAG Standards)</li>
                        <li>Cross-Browser Testing (BrowserStack)</li>
                      </ul>
                    </section>
                    <section>
                      <h3 className="mb-2 text-sm font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Tools & Workflow</h3>
                      <ul className="space-y-1">
                        <li>Git Version Control</li>
                        <li>Figma</li>
                        <li>Agile / Sprint Methodologies</li>
                      </ul>
                    </section>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
