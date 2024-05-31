import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-bb">
      <div
        className="container flex flex-col items-center justify-center py-20"
        id="contact"
      >
        <div className="container lg:px-20 pb-10 flex items-center">
          <hr className="w-96 bg-redd h-1 border-0" />
          <h2 className="semi pl-5 text-2xl text-white">Contact</h2>
        </div>
        <form
          action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D8d000009q2y7"
          method="POST"
          className="md:w-3/6"
        >
          <input type="hidden" name="oid" value="00D8d000009q2y7" />
          <input
            type="hidden"
            name="retURL"
            value="https://www.stellantis.com"
          />
          <input
            type="hidden"
            name="recordType"
            id="recordType"
            value="0128d000000DtwF"
          />
          <input
            type="hidden"
            id="00N8d00000UVYP7"
            name="00N8d00000UVYP7"
            value="1"
          />
          <input
            type="hidden"
            id="00N8d00000UVYOu"
            name="00N8d00000UVYOu"
            value="83"
          />
          <input
            type="hidden"
            id="00N8d00000UVYPn"
            name="00N8d00000UVYPn"
            value="83-620"
          />
          <input
            type="hidden"
            id="Campaign_ID"
            name="Campaign_ID"
            value="701Tv000006ZdHfIAK"
          />
          <br />
          <label htmlFor="salutation" className="semi text-white text-2xl ">
            Civilité
          </label>
          <br />
          <select id="salutation" name="salutation" className="w-full h-8 mb-2">
            <option value="">- Aucun -</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
          <br />
          <label htmlFor="first_name" className="semi text-white text-2xl">
            Prénom
          </label>
          <br />
          <input
            id="first_name"
            maxLength="40"
            name="first_name"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
          />
          <br />
          <label htmlFor="last_name" className="semi text-white text-2xl">
            Nom
          </label>
          <br />
          <input
            id="last_name"
            maxLength="80"
            name="last_name"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
          />
          <br />
          <label htmlFor="mobile" className="semi text-white text-2xl ">
            Téléphone mobile
          </label>
          <br />
          <input
            id="mobile"
            maxLength="40"
            name="mobile"
            size="20"
            type="number"
            className="w-full h-8 mb-2"
          />
          <br />
          <label htmlFor="email" className="semi text-white text-2xl ">
            Adresse e-mail
          </label>
          <br />
          <input
            id="email"
            maxLength="80"
            name="email"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
          />
          <br />
          {/* <label
            htmlFor="00NTv0000008h9V"
            className="semi text-white text-2xl "
          >
            Showroom FB:
          </label>
          <br />
          <input
            id="00NTv0000008h9V"
            maxLength="50"
            name="00NTv0000008h9V"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
          />
          <br /> */}
          <label htmlFor="city" className="semi text-white text-2xl ">
            Ville
          </label>{" "}
          <br />
          <input
            id="city"
            maxLength="40"
            name="city"
            size="20"
            type="text"
            className="w-full h-8 mb-2"
          />
          <br />
          <br />
          <input
            type="submit"
            name="submit"
            className="semi text-black w-48 h-10 bg-white hover:bg-slate-400 cursor-pointer"
          />
        </form>
      </div>
      <div className="grid  lg:grid-cols-3 py-10">
        <div></div>
        <div></div>
        <div className="flex justify-center items-center gap-x-3">
          <p className="semi text-white">Suivez-nous</p>
          <a
            href="https://www.facebook.com/alfaromeomaroc"
            className="cursor-pointer"
          >
            <FaFacebook size={20} color="white" />
          </a>
          <a
            href="https://www.instagram.com/alfaromeo_morocco/?igshid=YmMyMTA2M2Y%3D"
            className="cursor-pointer"
          >
            <FaInstagram size={20} color="white" />
          </a>
          <a
            href="https://www.linkedin.com/company/alfa-romeo-maroc/"
            className="cursor-pointer"
          >
            <FaLinkedin size={20} color="white" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC0wCJjBy869t76oBZ62Q41w"
            className="cursor-pointer"
          >
            <FaYoutube size={20} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
