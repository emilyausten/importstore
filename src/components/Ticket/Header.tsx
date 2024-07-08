import brazil from "../../assets/images/brazil.svg";
import eua from "../../assets/images/united-states.svg";
import spain from "../../assets/images/spain.svg";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoCloseCircleOutline } from "react-icons/io5";
import Powered from "../../assets/Powered";
import Image from "next/image";

export default function Header() {
  return (
    <header
      className="headerbar"
      ng-controller="HeaderBarController as headerbar"
    >
      <div
        className="content"
        data-ng-class="{
         'fluid': event.footballPlaceMap,
         }"
      >
        <div className="headerbar__event">
          <figure
            className="headerbar__event__poster"
            style={{
              backgroundImage:
                "url(https://event-kraken.s3.amazonaws.com/event/posters/72154/medium.jpg)",
            }}
          >
            <Image
              className="headerbar__event__poster__img"
              alt="poster"
              width={100}
              height={100}
              src="https://event-kraken.s3.amazonaws.com/event/posters/72154/medium.jpg?timestamp=2024-07-07T04:02:09-03:00"
            />
          </figure>
          <div className="headerbar__event__info">
            <div className="headerbar__event__info__powered">
              <Powered />
            </div>
            <div
              className="headerbar__event__info__title ng-binding"
              style={{ maxWidth: "24rem !important" }}
            >
              Só Track Boa Belo Horizonte 2024
            </div>
          </div>
        </div>
        <div className="headerbar__actions">
          <div
            className="headerbar__actions__item"
            data-ng-hide="isHelpButtonHidden"
          >
            <a
              className="flex items-center gap-1"
              target="_blank"
              href="https://ingresse.freshdesk.com"
              style={{ display: "flex", gap: 4 }}
              id="header_link_help"
            >
              <AiOutlineQuestionCircle size={24} />
              <span className="hidden-xs ng-binding"> Ajuda </span>
            </a>
          </div>
          <div
            className="headerbar__actions__item"
            data-ng-hide="isHelpButtonHidden"
          >
            <a
              className="headerbar__actions__item__close !flex items-center !gap-1"
              id="header_link_close"
              style={{ display: "flex", gap: 4 }}
            >
              <IoCloseCircleOutline size={24} />
              <span className="hidden-xs ng-binding"> Fechar </span>
            </a>
          </div>
          <div
            className="headerbar__actions__item ng-hide"
            data-ng-hide="!isHelpButtonHidden"
          >
            <a className="headerbar__actions__item__back" id="header_back">
              <svg
                viewBox="0 0 30 30"
                className="aph ic ng-isolate-scope"
                data-title="arrow-left-circle"
              >
                {/* ngIf: title && iconId */}
                <use
                  data-ng-if="title && iconId"
                  xlinkHref="#arrow-left-circle"
                  className="ng-scope"
                ></use>
                {/* end ngIf: title && iconId */}
              </svg>
            </a>
          </div>
        </div>
        <div className="headerbar__locale">
          <div className="headerbar__locale__item">
            <ul className="toggle_locale">
              <li
                ng-class="{ 'selected': headerbar.localeValue === 'pt-BR'}"
                ng-click="changeLanguage('pt-BR')"
                className="selected"
              >
                {" "}
                <Image
                  width={24}
                  height={24}
                  src={brazil}
                  alt="bandeira do brasil"
                />
                PT{" "}
              </li>
              <li
                ng-class="{ 'selected': headerbar.localeValue === 'es-ES'}"
                ng-click="changeLanguage('es-ES')"
              >
                {" "}
                <Image
                  width={24}
                  height={24}
                  src={spain}
                  alt="bandeira da espanha"
                />
                ES{" "}
              </li>
              <li
                ng-class="{ 'selected': headerbar.localeValue === 'en-US'}"
                ng-click="changeLanguage('en-US')"
              >
                {" "}
                <Image
                  width={24}
                  height={24}
                  src={eua}
                  alt="bandeira dos Estados Unidos"
                />
                EN{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
