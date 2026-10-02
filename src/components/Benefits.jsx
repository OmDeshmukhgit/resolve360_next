import Link from "next/link";
import { 
  Check, 
  X, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

/**
 * Authentic SVG Icons extracted directly from Resolve360's original website
 */
function NoTravelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <rect width="122" height="122" rx="61" fill="#F1F5FE" />
      <path d="M61.7603 40.2071C61.5298 40.0715 60.9998 40 60.7324 40C60.4698 40.0715 60.2393 40.2071L33.4463 55.9676L34.9673 58.5536L60.9998 43.2401L87.0323 58.5551L88.5533 55.9691L78.9998 50.3501V43.0001C78.9998 42.6023 78.8418 42.2207 78.5604 41.9394C78.2791 41.6581 77.8976 41.5001 77.4998 41.5001H72.9998C72.602 41.5001 72.2204 41.6581 71.9391 41.9394C71.6578 42.2207 71.4998 42.6023 71.4998 43.0001V45.9356L61.7603 40.2071ZM45.9998 62.5001H62.4998V71.5001H45.9998V62.5001Z" fill="#0D78B8" />
      <path fillRule="evenodd" clipRule="evenodd" d="M61 46L40 58V79H32.5C32.1022 79 31.7206 79.158 31.4393 79.4393C31.158 79.7206 31 80.1022 31 80.5C31 80.8978 31.158 81.2794 31.4393 81.5607C31.7206 81.842 32.1022 82 32.5 82H86.5C86.8978 82 87.2794 81.842 87.5607 81.5607C87.842 81.2794 88 80.8978 88 80.5C88 80.1022 87.842 79.7206 87.5607 79.4393C87.2794 79.158 86.8978 79 86.5 79H82V58L61 46ZM61 49.4545L43 59.7415V79H67V62.5H76V79H79V59.74L61 49.4545Z" fill="#0D78B8" />
    </svg>
  );
}

function FlexibleTimingsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <rect width="122" height="122" rx="61" fill="#F1F5FE" />
      <path d="M74.5417 66.4167C75.26 66.4167 75.9488 66.1313 76.4567 65.6234C76.9647 65.1155 77.25 64.4266 77.25 63.7083C77.25 62.99 76.9647 62.3012 76.4567 61.7933C75.9488 61.2853 75.26 61 74.5417 61C73.8234 61 73.1345 61.2853 72.6266 61.7933C72.1187 62.3012 71.8333 62.99 71.8333 63.7083C71.8333 64.4266 72.1187 65.1155 72.6266 65.6234C73.1345 66.1313 73.8234 66.4167 74.5417 66.4167ZM74.5417 77.25C75.26 77.25 75.9488 76.9647 76.4567 76.4567C76.9647 75.9488 77.25 75.26 77.25 74.5417C77.25 73.8234 76.9647 73.1345 76.4567 72.6266C75.9488 72.1187 75.26 71.8333 74.5417 71.8333C73.8234 71.8333 73.1345 72.1187 72.6266 72.6266C72.1187 73.1345 71.8333 73.8234 71.8333 74.5417C71.8333 75.26 72.1187 75.9488 72.6266 76.4567C73.1345 76.9647 73.8234 77.25 74.5417 77.25ZM63.7083 63.7083C63.7083 64.4266 63.423 65.1155 62.9151 65.6234C62.4072 66.1313 61.7183 66.4167 61 66.4167C60.2817 66.4167 59.5928 66.1313 59.0849 65.6234C58.577 65.1155 58.2917 64.4266 58.2917 63.7083C58.2917 62.99 58.577 62.3012 59.0849 61.7933C59.5928 61.2853 60.2817 61 61 61C61.7183 61 62.4072 61.2853 62.9151 61.7933C63.423 62.3012 63.7083 62.99 63.7083 63.7083ZM63.7083 74.5417C63.7083 75.26 63.423 75.9488 62.9151 76.4567C62.4072 76.9647 61.7183 77.25 61 77.25C60.2817 77.25 59.5928 76.9647 59.0849 76.4567C58.577 75.9488 58.2917 75.26 58.2917 74.5417C58.2917 73.8234 58.577 73.1345 59.0849 72.6266C59.5928 72.1187 60.2817 71.8333 61 71.8333C61.7183 71.8333 62.4072 72.1187 62.9151 72.6266C63.423 73.1345 63.7083 73.8234 63.7083 74.5417ZM47.4583 66.4167C48.1766 66.4167 48.8655 66.1313 49.3734 65.6234C49.8813 65.1155 50.1667 64.4266 50.1667 63.7083C50.1667 62.99 49.8813 62.3012 49.3734 61.7933C48.8655 61.2853 48.1766 61 47.4583 61C46.74 61 46.0512 61.2853 45.5433 61.7933C45.0353 62.3012 44.75 62.99 44.75 63.7083C44.75 64.4266 45.0353 65.1155 45.5433 65.6234C46.0512 66.1313 46.74 66.4167 47.4583 66.4167ZM47.4583 77.25C48.1766 77.25 48.8655 76.9647 49.3734 76.4567C49.8813 75.9488 50.1667 75.26 50.1667 74.5417C50.1667 73.8234 49.8813 73.1345 49.3734 72.6266C48.8655 72.1187 48.1766 71.8333 47.4583 71.8333C46.74 71.8333 46.0512 72.1187 45.5433 72.6266C45.0353 73.1345 44.75 73.8234 44.75 74.5417C44.75 75.26 45.0353 75.9488 45.5433 76.4567C46.0512 76.9647 46.74 77.25 47.4583 77.25Z" fill="#0D78B8" />
      <path fillRule="evenodd" clipRule="evenodd" d="M47.4579 33.2397C47.9966 33.2397 48.5133 33.4538 48.8942 33.8347C49.2751 34.2156 49.4892 34.7323 49.4892 35.271V37.3375C51.2821 37.3022 53.2564 37.3022 55.4285 37.3022H66.5679C68.7427 37.3022 70.7171 37.3022 72.51 37.3375V35.271C72.51 34.7323 72.724 34.2156 73.1049 33.8347C73.4859 33.4538 74.0025 33.2397 74.5412 33.2397C75.08 33.2397 75.5966 33.4538 75.9776 33.8347C76.3585 34.2156 76.5725 34.7323 76.5725 35.271V37.5108C77.2767 37.565 77.9438 37.6336 78.5739 37.7166C81.7481 38.1445 84.3183 39.0437 86.3469 41.0695C88.3727 43.0981 89.2719 45.6683 89.6998 48.8425C90.1142 51.93 90.1142 55.8706 90.1142 60.8485V66.5685C90.1142 71.5464 90.1142 75.4897 89.6998 78.5745C89.2719 81.7487 88.3727 84.3189 86.3469 86.3475C84.3183 88.3733 81.7481 89.2725 78.5739 89.7004C75.4864 90.1147 71.5458 90.1147 66.5679 90.1147H55.4339C50.456 90.1147 46.5127 90.1147 43.4279 89.7004C40.2537 89.2725 37.6835 88.3733 35.655 86.3475C33.6292 84.3189 32.73 81.7487 32.3021 78.5745C31.8877 75.487 31.8877 71.5464 31.8877 66.5685V60.8485C31.8877 55.8706 31.8877 51.9272 32.3021 48.8425C32.73 45.6683 33.6292 43.0981 35.655 41.0695C37.6835 39.0437 40.2537 38.1445 43.4279 37.7166C44.0598 37.6336 44.727 37.565 45.4294 37.5108V35.271C45.4294 34.7327 45.643 34.2165 46.0233 33.8356C46.4037 33.4548 46.9197 33.2405 47.4579 33.2397ZM43.9642 41.7439C41.2423 42.1095 39.6714 42.7975 38.5258 43.9431C37.3802 45.0887 36.6923 46.6595 36.3267 49.3814C36.2653 49.8418 36.2129 50.3284 36.1696 50.8412H85.8296C85.7862 50.3284 85.7339 49.8409 85.6725 49.3787C85.3069 46.6568 84.6189 45.086 83.4733 43.9404C82.3277 42.7947 80.7569 42.1068 78.0323 41.7412C75.2508 41.3675 71.581 41.362 66.4162 41.362H55.5829C50.4181 41.362 46.751 41.3702 43.9642 41.7439ZM35.9475 61.0002C35.9475 58.6872 35.9475 56.675 35.9827 54.9064H86.0164C86.0517 56.675 86.0517 58.6872 86.0517 61.0002V66.4168C86.0517 71.5816 86.0462 75.2514 85.6725 78.0356C85.3069 80.7575 84.6189 82.3283 83.4733 83.4739C82.3277 84.6195 80.7569 85.3075 78.0323 85.6731C75.2508 86.0468 71.581 86.0522 66.4162 86.0522H55.5829C50.4181 86.0522 46.751 86.0468 43.9642 85.6731C41.2423 85.3075 39.6714 84.6195 38.5258 83.4739C37.3802 82.3283 36.6923 80.7575 36.3267 78.0329C35.9529 75.2514 35.9475 71.5816 35.9475 66.4168V61.0002Z" fill="#0D78B8" />
    </svg>
  );
}

function ExpertGuidanceIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <rect width="122" height="122" rx="61" fill="#F1F5FE" />
      <path fillRule="evenodd" clipRule="evenodd" d="M75.5833 49.3333C75.5833 57.3877 69.0544 63.9167 61 63.9167C52.9456 63.9167 46.4167 57.3877 46.4167 49.3333C46.4167 41.279 52.9456 34.75 61 34.75C69.0544 34.75 75.5833 41.279 75.5833 49.3333ZM72.6667 49.3333C72.6667 52.4275 71.4375 55.395 69.2496 57.5829C67.0617 59.7708 64.0942 61 61 61C57.9058 61 54.9383 59.7708 52.7504 57.5829C50.5625 55.395 49.3333 52.4275 49.3333 49.3333C49.3333 46.2391 50.5625 43.2717 52.7504 41.0838C54.9383 38.8958 57.9058 37.6667 61 37.6667C64.0942 37.6667 67.0617 38.8958 69.2496 41.0838C71.4375 43.2717 72.6667 46.2391 72.6667 49.3333ZM52.1246 68.0802L52.1406 68.1123L52.25 68.3267H69.384C69.7179 67.6938 70.4748 66.6846 71.2083 66.8523C72.8563 67.2271 74.5158 67.7492 76.1098 68.3923L76.1579 68.369L76.174 68.401L76.1856 68.4229C82.1867 70.8613 87.25 74.9942 87.25 79.3312V87.25H34.75V79.3312C34.75 73.826 42.9108 68.646 50.7917 66.8523C51.4348 66.7065 51.8169 67.4648 52.1246 68.0802ZM73.6933 70.6002C73.0678 70.3809 72.435 70.1829 71.796 70.0067L71.1456 71.2433H50.4898L49.886 70.0956L49.361 70.2531C49.3503 70.3484 49.3426 70.4573 49.3377 70.5798C49.3188 71.0829 49.3567 71.6794 49.4398 72.286C49.5246 72.9189 49.6611 73.5437 49.8481 74.1542C50.8726 74.2755 51.8211 74.755 52.5264 75.5079C53.2316 76.2608 53.6481 77.2387 53.7023 78.2688C53.7566 79.299 53.445 80.3152 52.8227 81.1379C52.2004 81.9607 51.3074 82.5371 50.3014 82.7654C49.2954 82.9936 48.241 82.859 47.3246 82.3853C46.4082 81.9117 45.6886 81.1294 45.293 80.1767C44.8973 79.224 44.851 78.1621 45.1623 77.1786C45.4736 76.1951 46.1224 75.3532 46.9942 74.8017L46.9825 74.7608C46.7878 74.0791 46.643 73.384 46.5494 72.6812C46.4875 72.2323 46.4467 71.7807 46.4269 71.3279C44.6244 72.0979 42.9429 73.0283 41.5342 74.055C38.7313 76.1025 37.6667 78.0158 37.6667 79.3312V84.3333H84.3333V79.3312C84.3333 78.0144 83.2687 76.101 80.4658 74.0565C79.2435 73.1779 77.9419 72.4153 76.5779 71.7785C76.5183 72.5689 76.3974 73.3534 76.2162 74.125H77.0417C77.3124 74.1251 77.5778 74.2007 77.8081 74.3431C78.0383 74.4855 78.2244 74.6893 78.3454 74.9315L79.8038 77.8481C79.9058 78.0508 79.9583 78.274 79.9583 78.5V81.4167C79.9583 81.8034 79.8047 82.1744 79.5312 82.4479C79.2577 82.7214 78.8868 82.875 78.5 82.875H75.5833V79.9583H77.0417V78.8442L76.1404 77.0417H72.1096L71.2083 78.8442V79.9583H72.6667V82.875H69.75C69.3632 82.875 68.9923 82.7214 68.7188 82.4479C68.4453 82.1744 68.2917 81.8034 68.2917 81.4167V78.5C68.2917 78.274 68.3442 78.0508 68.4463 77.8481L69.9046 74.9315C70.0256 74.6893 70.2117 74.4855 70.4419 74.3431C70.6722 74.2007 70.9376 74.1251 71.2083 74.125H73.1946L73.2485 73.9442C73.3856 73.476 73.5081 72.8942 73.5912 72.2875C73.6729 71.6867 73.7108 71.099 73.6933 70.6002ZM50.7917 78.5C50.7917 79.3371 50.1179 79.9802 49.3333 79.9802C48.5487 79.9802 47.875 79.3385 47.875 78.5C47.875 77.6629 48.5487 77.0198 49.3333 77.0198C50.1179 77.0198 50.7917 77.6615 50.7917 78.5Z" fill="#0D78B8" />
    </svg>
  );
}

function MoreAffordableIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <rect width="122" height="122" rx="61" fill="#F1F5FE" />
      <path d="M52.25 55.1668H72.6667M52.25 46.4168H72.6667M80.5679 36.1939C75.0496 33.4493 68.2917 31.8335 61 31.8335C53.7083 31.8335 46.9533 33.4493 41.4321 36.1939C38.7254 37.5414 37.3721 38.2152 36.0625 40.3327C34.7529 42.4502 34.75 44.4977 34.75 48.5985V58.7777C34.75 75.3531 47.9975 84.5668 55.6713 88.516C57.8121 89.6156 58.8796 90.1668 61 90.1668C63.1204 90.1668 64.1879 89.6156 66.3287 88.516C73.9996 84.5668 87.25 75.3502 87.25 58.7747V48.5985C87.25 44.4977 87.25 42.4502 85.9375 40.3327C84.625 38.2152 83.2746 37.5414 80.5679 36.1939Z" stroke="#0D78B8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52.25 46.417H58.0833C60.404 46.417 62.6296 47.3389 64.2705 48.9798C65.9115 50.6208 66.8333 52.8463 66.8333 55.167C66.8333 57.4876 65.9115 59.7132 64.2705 61.3542C62.6296 62.9951 60.404 63.917 58.0833 63.917H52.25L66.8333 75.5837" stroke="#0D78B8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonalizedCareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <rect width="122" height="122" rx="61" fill="#F1F5FE" />
      <g clipPath="url(#clip0_benefits_care)">
        <path fillRule="evenodd" clipRule="evenodd" d="M50.2855 41.7143C50.2855 38.8727 51.4143 36.1475 53.4236 34.1381C55.4329 32.1288 58.1581 31 60.9997 31C63.8414 31 66.5666 32.1288 68.5759 34.1381C70.5852 36.1475 71.714 38.8727 71.714 41.7143C71.714 44.5559 70.5852 47.2811 68.5759 49.2904C66.5666 51.2997 63.8414 52.4286 60.9997 52.4286C58.1581 52.4286 55.4329 51.2997 53.4236 49.2904C51.4143 47.2811 50.2855 44.5559 50.2855 41.7143ZM54.8069 55.3C52.6328 53.2447 49.7472 52.1113 46.7555 52.1377C43.7639 52.164 40.8987 53.3481 38.7612 55.4414C37.6282 56.5495 36.7348 57.8784 36.1365 59.3459C35.5383 60.8134 35.2478 62.3882 35.2832 63.9725C35.3185 65.5569 35.6789 67.1171 36.3421 68.5565C37.0053 69.9958 37.957 71.2836 39.1383 72.34L59.2126 90.3186C59.7039 90.7586 60.3402 91.0019 60.9997 91.0019C61.6593 91.0019 62.2956 90.7586 62.7869 90.3186L82.8612 72.34C84.0425 71.2836 84.9942 69.9958 85.6574 68.5565C86.3205 67.1171 86.681 65.5569 86.7163 63.9725C86.7517 62.3882 86.4612 60.8134 85.863 59.3459C85.2647 57.8784 84.3713 56.5495 83.2383 55.4414C81.1008 53.3481 78.2356 52.164 75.244 52.1377C72.2523 52.1113 69.3667 53.2447 67.1926 55.3L60.9997 61.1586L54.8069 55.3ZM42.5069 59.2686C43.6545 58.1451 45.1925 57.5095 46.7985 57.4951C48.4045 57.4807 49.9536 58.0887 51.1212 59.1914L59.1612 66.79C59.6583 67.2593 60.3161 67.5206 60.9997 67.5206C61.6834 67.5206 62.3412 67.2593 62.8383 66.79L70.874 59.1914C72.0416 58.0887 73.5908 57.4807 75.1967 57.4951C76.8027 57.5095 78.3407 58.1451 79.4883 59.2686C82.0597 61.7843 81.9655 65.9543 79.2869 68.35L60.9997 84.7257L42.7126 68.35C42.0773 67.7825 41.5654 67.0905 41.2088 66.3169C40.8521 65.5433 40.6583 64.7047 40.6394 63.853C40.6206 63.0014 40.777 62.155 41.099 61.3663C41.4209 60.5777 41.9016 59.8636 42.5112 59.2686" fill="#0D78B8" />
      </g>
      <defs>
        <clipPath id="clip0_benefits_care">
          <rect width="60" height="60" fill="white" transform="translate(31 31)" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ConsistentRecoveryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none" className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0">
      <rect width="122" height="122" rx="61" fill="#F1F5FE" />
      <path d="M36 58.5L53.5 42.25L69.75 59.75L86 43.5" stroke="#0D78B8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M86 53.5V43.5H76M38.5 88.5V67.25M53.5 56V88.5M68.5 71V88.5M83.5 62.25V88.5" stroke="#0D78B8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Benefits() {
  const realBenefits = [
    {
      num: "1",
      title: "No travel required",
      desc: "Consult from home regardless of your location. Say goodbye to traffic, waiting rooms, and travel fatigue.",
      icon: NoTravelIcon
    },
    {
      num: "2",
      title: "Flexible Timings",
      desc: "Morning or evening sessions available Monday to Saturday, designed for working professionals and busy families",
      icon: FlexibleTimingsIcon
    },
    {
      num: "3",
      title: "Expert Guidance",
      desc: "Get treated by qualified physiotherapists with proven expertise and experience in online rehab.",
      icon: ExpertGuidanceIcon
    },
    {
      num: "4",
      title: "More Affordable",
      desc: "Online physiotherapy is significantly 50% more cost-effective than in-clinic visits - without compromising on quality or results.",
      icon: MoreAffordableIcon
    },
    {
      num: "5",
      title: "Personalized Care",
      desc: "Get 1 - on - 1 attention with customized treatment plans tailored to your condition, lifestyle, and goals.",
      icon: PersonalizedCareIcon
    },
    {
      num: "6",
      title: "Consistent Recovery",
      desc: "Stay consistent with expert guidance and follow-ups, ensuring uninterrupted progress from the comfort of home.",
      icon: ConsistentRecoveryIcon
    }
  ];

  const comparisons = [
    {
      feature: "Therapy Focus",
      resolve: "Active targeted movement & neuromuscular re-education addressing root causes",
      clinic: "Passive modalities (heat packs, TENS, ultrasound) providing only temporary numbing",
      better: true
    },
    {
      feature: "Specialist Attention",
      resolve: "Dedicated 1:1 video session with a senior Master's-level physiotherapist",
      clinic: "Often managed by multiple junior helpers rotating between 4-5 patients at once",
      better: true
    },
    {
      feature: "Travel & Commute",
      resolve: "Zero travel. Exercise in your living room, home gym, or office",
      clinic: "Aggravating traffic delays, stair-climbing, and uncomfortable waiting rooms",
      better: true
    },
    {
      feature: "Continuous Support",
      resolve: "Daily app exercise guidance, WhatsApp care team communication, and progress monitoring",
      clinic: "Zero contact or feedback once you walk out of the clinic door",
      better: true
    },
    {
      feature: "Clinical Methodology",
      resolve: "Indian Patent No. 596041 for prognosis, protocol creation, and milestone delivery",
      clinic: "Unstandardized, ad-hoc routines varying wildly between random clinics",
      better: true
    },
    {
      feature: "Cost & Transparency",
      resolve: "1st consultation ₹0 Free; care plans start at ₹499/session with zero hidden fees",
      clinic: "₹800 to ₹2,500 per visit plus equipment fees and transport expenses",
      better: true
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-100" id="benefits" aria-label="The Real Benefits of Online Physiotherapy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading matching original Resolve360 */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#0D78B8] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 mb-3 inline-block">
            why resolve360
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#09131A] tracking-tight">
            The <span className="text-[#C70031]">Real</span> Benefits
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
            Online physiotherapy that fits your life, understands your needs, and delivers real, lasting recovery.
          </p>
        </div>

        {/* 6 Real Benefits Grid matching original Resolve360 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {realBenefits.map((b) => {
            const Icon = b.icon;
            return (
              <div 
                key={b.num}
                className="relative bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#0D78B8]/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 overflow-hidden group"
              >
                {/* Large Subtle Watermark Number */}
                <span 
                  className="absolute top-2 right-4 sm:top-3 sm:right-5 text-4xl sm:text-5xl font-black text-[#DCEBF7] select-none pointer-events-none group-hover:text-[#CBE2F4] transition-colors"
                  aria-hidden="true"
                >
                  {b.num}
                </span>

                {/* Circular Brand Icon */}
                <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <Icon />
                </div>

                {/* Content */}
                <div className="flex-1 pr-6 z-10">
                  <h3 className="text-base sm:text-lg font-bold text-[#09131A] mb-1.5 leading-snug group-hover:text-[#0D78B8] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50/60 rounded-3xl p-6 sm:p-8 border border-slate-200/80">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#09131A]">
              Resolve360 vs. Traditional Offline Clinics
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Active root-cause recovery vs. passive machine modalities
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse bg-white rounded-2xl overflow-hidden shadow-xs border border-slate-200">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th className="py-4 px-4 sm:px-6 font-bold text-slate-800 w-1/4">Key Feature</th>
                  <th className="py-4 px-4 sm:px-6 font-extrabold text-[#0D78B8] bg-sky-50/70 border-x border-sky-100 w-2/5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0D78B8]" />
                      <span>Resolve360 Online Rehab</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 sm:px-6 font-bold text-slate-600 w-1/3">Typical Offline Clinic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-semibold text-slate-900">{c.feature}</td>
                    <td className="py-4 px-4 sm:px-6 bg-sky-50/30 border-x border-sky-100 text-slate-800 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{c.resolve}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                        <span>{c.clinic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/book-appointment"
              className="resolve-btn px-8 py-3 text-sm shadow-md"
            >
              <span>Get Started with Free Consultation (₹0)</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
