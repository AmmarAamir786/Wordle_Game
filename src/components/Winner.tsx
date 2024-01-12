import React from "react";

type Props = {
  winners: {
  name: string;
  score: number;
  position: number
  }[]
  }

function Icon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 467 75"
    >
      <path
        fill="#000"
        fillOpacity="0.1"
        d="M467 74H0v2h467v-2z"
        mask="url(#path-1-inside-1_1_2970)"
      ></path>
      <g filter="url(#filter0_di_1_2970)">
        <circle cx="49.761" cy="37.5" r="27.5" fill="#C8C8C8"></circle>
        <circle
          cx="49.761"
          cy="37.5"
          r="25.906"
          stroke="#fff"
          strokeWidth="3.188"
        ></circle>
      </g>
      <g filter="url(#filter1_d_1_2970)">
        <text
          fill="#fff"
          fillOpacity="0.5"
          shapeRendering="crispEdges"
          style={{ whiteSpace: "pre" }}
          fontSize="20.725"
          fontWeight="bold"
          letterSpacing="0em"
        >
          <tspan x="36.11" y="44.754">
            TH
          </tspan>
        </text>
      </g>
      <circle cx="21.159" cy="37.159" r="11.159" fill="#fff"></circle>
      <text
        fill="coral"
        style={{ whiteSpace: "pre" }}
        fontSize="12.754"
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x="16.844" y="41.623">
          {props.winners[0].position}
        </tspan>
      </text>
      <text
        fill="#545454"
        style={{ whiteSpace: "pre" }}
        fontSize="18"
        fontWeight="600"
        letterSpacing="0em"
      >
        <tspan x="95.261" y="43.8">
          {props.winners[0].name}
        </tspan>
      </text>
      <g clipPath="url(#clip0_1_2970)">
        <path
          fill="#F0F0F0"
          d="M414 46.5a9 9 0 009-9 9 9 0 00-9-9 9 9 0 00-9 9 9 9 0 009 9z"
        ></path>
        <path
          fill="#D80027"
          d="M413.609 37.5H423a9 9 0 00-.31-2.348h-9.081V37.5zM413.609 32.804h8.07a9.038 9.038 0 00-2.077-2.348h-5.993v2.348zM414 46.5a8.96 8.96 0 005.602-1.956h-11.204A8.96 8.96 0 00414 46.5zM406.321 42.196h15.358a8.969 8.969 0 001.011-2.348h-17.38a8.969 8.969 0 001.011 2.348z"
        ></path>
        <path
          fill="#0052B4"
          d="M409.169 29.905h.82l-.763.555.292.896-.763-.554-.763.555.252-.775a9.039 9.039 0 00-1.746 1.945h.263l-.486.353a9.04 9.04 0 00-.217.385l.231.713-.432-.314c-.108.228-.206.46-.295.699l.256.786h.943l-.763.554.291.897-.762-.554-.457.332c-.046.367-.07.742-.07 1.122h9v-9a8.957 8.957 0 00-4.831 1.405zm.349 6.695l-.763-.554-.763.554.291-.897-.763-.554h.943l.292-.897.291.897h.943l-.763.554.292.897zm-.292-3.519l.292.897-.763-.554-.763.554.291-.897-.763-.554h.943l.292-.897.291.897h.943l-.763.554zm3.52 3.519l-.763-.554-.763.554.292-.897-.763-.554h.943l.291-.897.291.897h.943l-.763.554.292.897zm-.292-3.519l.292.897-.763-.554-.763.554.292-.897-.763-.554h.943l.291-.897.291.897h.943l-.763.554zm0-2.621l.292.896-.763-.554-.763.555.292-.897-.763-.555h.943l.291-.896.291.896h.943l-.763.555z"
        ></path>
      </g>
      <text
        fill="#777"
        style={{ whiteSpace: "pre" }}
        fontFamily="Poppins"
        fontSize="14"
        fontWeight="600"
        letterSpacing="0em"
      >
        <tspan x="430.327" y="42.4">
          {props.winners[0].score}
        </tspan>
      </text>
      <defs>
        <filter
          id="filter0_di_1_2970"
          width="61.377"
          height="61.377"
          x="19.073"
          y="10"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="3.188"></feOffset>
          <feGaussianBlur stdDeviation="1.594"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2970"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2970"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="12.754"></feOffset>
          <feGaussianBlur stdDeviation="2.79"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_1_2970"></feBlend>
        </filter>
        <filter
          id="filter1_d_1_2970"
          width="32.01"
          height="20.925"
          x="33.419"
          y="30.451"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="3.188"></feOffset>
          <feGaussianBlur stdDeviation="1.594"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2970"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2970"
            result="shape"
          ></feBlend>
        </filter>
        <clipPath id="clip0_1_2970">
          <path
            fill="#fff"
            d="M0 0H18V18H0z"
            transform="translate(405 28.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
