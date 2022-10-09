import React from "react";
import Header from "../Header/Header";
import s from "./Process.module.scss";
import { ReactComponent as Pen } from "../../assets/file-pen.svg";
import { ReactComponent as Paint } from "../../assets/paintbrush.svg";
import { ReactComponent as ArrowRight } from "../../assets/angle-right.svg";
import { ReactComponent as ArrowDown } from "../../assets/angle-down.svg";
import { ReactComponent as Gears } from "../../assets/gears.svg";
import { ReactComponent as Testing } from "../../assets/testing.svg";

export default function Process() {
  return (
    <section id={s["process"]}>
      <div className="container">
        <div className={s.header}>
          <Header title="The Process" />
          {/* <p className={s.processIntro}>
          With our proven mobile app development process, we build apps on time
          and within budget.
        </p> */}
        </div>
        <div className={s.processWrapper}>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Pen className="icon" />
            </div>
            <h4>Development Strategy</h4>
            <p>
              An effective mobile strategy includes competitor research,
              business goals, and product roadmap
            </p>
          </div>
          <div className={s.arrow}>
            <ArrowRight className={`icon ${s.right}`} />
            <ArrowDown className={`icon ${s.down}`} />
          </div>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Paint className="icon" />
            </div>
            <h4>User Experience</h4>
            <p>
              Our app designers create mobile app designs following the best
              practices and app store UI guidelines.
            </p>
          </div>
          <div className={s.arrow}>
            <ArrowRight className={`icon ${s.right}`} />
            <ArrowDown className={`icon ${s.down}`} />
          </div>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Gears className="icon" />
            </div>
            <h4>Development Plan & Build</h4>
            <p>
              After finalizing app design and specifications, we create a
              milestone-based development plan and build application.
            </p>
          </div>
          <div className={s.arrow}>
            <ArrowRight className={`icon ${s.right}`} />
            <ArrowDown className={`icon ${s.down}`} />
          </div>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Testing className="icon" />
            </div>
            <h4>Testing</h4>
            <p>
              When app development is complete, we perform thorough testing to
              deliver a stable, usable, and secured product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
