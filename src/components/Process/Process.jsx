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
          <Header title="How It Works" />
        </div>
        <div className={s.processWrapper}>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Pen className="icon" />
            </div>
            <div className={s.content}>
              <h4>Development Strategy</h4>
              <p>
                First, we'll develop an effective app strategy includes
                competitor research, business goals, and a product roadmap.
              </p>
            </div>
          </div>
          <div className={s.arrow}>
            <ArrowRight className={`icon ${s.right}`} />
            <ArrowDown className={`icon ${s.down}`} />
          </div>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Paint className="icon" />
            </div>
            <div className={s.content}>
              <h4>User Experience</h4>
              <p>
                Next, you will receive designs following the best practices and
                app store UI guidelines.
              </p>
            </div>
          </div>
          <div className={s.arrow}>
            <ArrowRight className={`icon ${s.right}`} />
            <ArrowDown className={`icon ${s.down}`} />
          </div>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Gears className="icon" />
            </div>
            <div className={s.content}>
              <h4>Development Plan & Build</h4>
              <p>
                After finalizing app design and specifications, we create a
                milestone-based development plan and build the application.
              </p>
            </div>
          </div>
          <div className={s.arrow}>
            <ArrowRight className={`icon ${s.right}`} />
            <ArrowDown className={`icon ${s.down}`} />
          </div>
          <div className={s.processItem}>
            <div className={s.circle}>
              <Testing className="icon" />
            </div>
            <div className={s.content}>
              <h4>Testing</h4>
              <p>
                When app development is complete, we perform thorough testing to
                deliver a stable, usable, and secured product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
