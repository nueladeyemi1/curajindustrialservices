import React from "react";
import { createRoot } from "react-dom/client";
import Certificates from "./Certificates";
import { certificatedetails } from "./certificatedetails";
import NavbarComponent from "./NavbarComponent";
import "./index.css";

function Main() {
  return (
    <section>
      <NavbarComponent />
      <section className="certificates">
        {certificatedetails.map((describe) => {
          return <Certificates {...describe} />;
        })}
      </section>
      <section className="services">
        <div>Serivices</div>
        <article className="services__article">
          Curaj Industrial Services deal with calibration of Lab and Factory
          equipmentt including Calibration of digital scales and tanks. We also
          calibrate weigh bridge and give certicates on the equipment we
          calibrate. Do well to contact and reach out to us, using the contact
          form below.
        </article>
      </section>
    </section>
  );
}

createRoot(document.getElementById("root")).render(<Main />);
