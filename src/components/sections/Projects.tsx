import classNames from "classnames"
import SectionHeader from "./partials/SectionHeader"
import Image from "../elements/Image"
import featuresSplitIcon from "../../assets/images/features-split-icon.svg"
import featuresSplitImage from "../../assets/images/features-split-image.svg"
import featuresSplitTop01 from "../../assets/images/features-split-top-01.png"
import featuresSplitTop02 from "../../assets/images/features-split-top-02.png"
import featuresSplitTop03 from "../../assets/images/features-split-top-03.png"
import ProjectCard from "../elements/ProjectCard"

type Props = {
  className?: string
  topOuterDivider?: boolean
  bottomOuterDivider?: boolean
  topDivider?: boolean
  bottomDivider?: boolean
  hasBgColor?: boolean
  invertColor?: boolean
  invertMobile?: boolean
  invertDesktop?: boolean
  alignTop?: boolean
  imageFill?: boolean
}

const Projects = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}: Props) => (
  <section
    {...props}
    id="projects"
    className={classNames(
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )}
  >
    <div className="container">
      <div
        className={classNames(
          "features-split-inner section-inner",
          topDivider && "has-top-divider",
          bottomDivider && "has-bottom-divider"
        )}
      >
        <SectionHeader
          data={{
            title: "Projects",
          }}
          className="center-content reveal-from-top"
        >
          <Image
            className="mb-24"
            src={featuresSplitIcon}
            alt=""
            width={80}
            height={80}
          />
        </SectionHeader>
        <div
          className={classNames(
            "split-wrap",
            invertMobile && "invert-mobile",
            invertDesktop && "invert-desktop",
            alignTop && "align-top"
          )}
        >
          <div className="split-item reveal-from-top">
            <div className="split-item-content center-content-mobile">
              <ProjectCard
                title="Snippet Stock"
                websiteUrl="https://snippetstock.github.io"
                gitHubUrl="https://github.com/snippetstock"
                tags={["TypeScript", "React", "Next.js", "Chakra UI"]}
                body={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </>
                }
              />
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile illustration-element-01",
                imageFill && "split-item-image-fill"
              )}
            >
              <Image src={featuresSplitImage} alt="" width={528} height={396} />
              <div style={imgOddStyle}>
                <Image
                  src={featuresSplitTop01}
                  alt=""
                  width={624}
                  height={512}
                />
              </div>
            </div>
          </div>
          <div className="split-item reveal-from-top">
            <div className="split-item-content center-content-mobile">
              <ProjectCard
                title="Mars Cloud"
                websiteUrl="https://marscloud.vercel.app"
                gitHubUrl="https://github.com/nataliafa/marscloud"
                tags={["TypeScript", "React", "Next.js", "Chakra UI"]}
                body={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </>
                }
              />
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile illustration-element-02",
                imageFill && "split-item-image-fill"
              )}
            >
              <Image
                src={featuresSplitImage}
                alt="Features split 02"
                width={528}
                height={396}
              />
              <div style={imgEvenStyle}>
                <Image
                  src={featuresSplitTop02}
                  alt=""
                  width={624}
                  height={512}
                />
              </div>
            </div>
          </div>
          <div className="split-item reveal-from-top">
            <div className="split-item-content center-content-mobile">
              <ProjectCard
                title="Indigo Portfolio"
                websiteUrl="https://indigo-portfolio.vercel.app"
                gitHubUrl="https://github.com/nataliafa/indigo-portfolio"
                tags={["TypeScript", "React", "Next.js", "Chakra UI"]}
                body={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </>
                }
              />
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile illustration-element-01",
                imageFill && "split-item-image-fill"
              )}
            >
              <Image src={featuresSplitImage} alt="" width={528} height={396} />
              <div style={imgOddStyle}>
                <Image
                  src={featuresSplitTop03}
                  alt=""
                  width={624}
                  height={512}
                />
              </div>
            </div>
          </div>
          <div className="split-item reveal-from-top">
            <div className="split-item-content center-content-mobile">
              <ProjectCard
                title="Telecom Landing Page"
                websiteUrl="https://telecom-landing-page.vercel.app"
                gitHubUrl="https://github.com/nataliafa/telecom-landing-page"
                tags={[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Chakra UI",
                  "Emotion",
                ]}
                body={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </>
                }
              />
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile illustration-element-02",
                imageFill && "split-item-image-fill"
              )}
            >
              <Image src={featuresSplitImage} alt="" width={528} height={396} />
              <div style={imgEvenStyle}>
                <Image
                  src={featuresSplitTop02}
                  alt=""
                  width={624}
                  height={512}
                />
              </div>
            </div>
          </div>
          <div className="split-item reveal-from-top">
            <div className="split-item-content center-content-mobile">
              <ProjectCard
                title="UI Components"
                websiteUrl="https://ui-components-react.vercel.app"
                gitHubUrl="https://github.com/nataliafa/ui-components"
                tags={["JavaScript", "React", "Sass"]}
                body={
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </>
                }
              />
            </div>
            <div
              className={classNames(
                "split-item-image center-content-mobile illustration-element-01",
                imageFill && "split-item-image-fill"
              )}
            >
              <Image src={featuresSplitImage} alt="" width={528} height={396} />
              <div style={imgOddStyle}>
                <Image
                  src={featuresSplitTop01}
                  alt=""
                  width={624}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const imgOddStyle = {
  position: "absolute",
  width: "118.18%",
  maxWidth: "118.18%",
  top: "-6.31%",
  left: "-16.48%",
} as any

const imgEvenStyle = {
  position: "absolute",
  width: "118.18%",
  maxWidth: "118.18%",
  top: "-6.31%",
  left: "-1.51%",
} as any

export default Projects
