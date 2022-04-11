import React from 'react';
import StayTune from '../../assets/illustStayTune.png';
import './safeArea.css';

function safeArea(){
    return(
        <div className="safeArea">
            <div className="wrap-safeArea">
            <div className="text-safeArea">
            <h2>Stay Tune!!</h2>
            <p>Aplikasi di device ini masih kami kembangkan...</p>
            </div>
            <div className="wrap-stayTune">
                <img src={StayTune} alt="illust"/>
            </div>
            <svg id="white-learnica" width="unset" height="unset" viewBox="0 0 152 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.75798 20.0769C6.75798 20.9973 6.94205 21.5909 7.3102 21.867C7.67834 22.1431 8.35942 22.2812 9.35802 22.2812H11.0515V27.1683H7.22737C6.21214 27.1843 5.19744 27.1119 4.19475 26.9521C3.47569 26.8469 2.79235 26.5707 2.20214 26.1467C1.66819 25.7182 1.28327 25.132 1.10231 24.4717C0.852507 23.5529 0.73931 22.6024 0.76637 21.6507V0.85498H6.74877L6.75798 20.0769Z" fill="#FBFBFB"/>
            <path d="M12.9428 13.0591C13.4681 11.84 14.2406 10.7432 15.2115 9.83781C16.1804 8.93749 17.3194 8.23971 18.5616 7.78539C19.8557 7.31113 21.2238 7.07115 22.6021 7.0767C24.0945 7.05325 25.574 7.35639 26.937 7.96487C28.1821 8.52472 29.2836 9.3603 30.1583 10.4085C31.0567 11.5027 31.7208 12.7699 32.1095 14.1313C32.5561 15.6801 32.7228 17.2961 32.6019 18.9035H18.1475C18.1829 19.5283 18.3508 20.1385 18.6399 20.6936C18.8953 21.1841 19.2438 21.6203 19.6661 21.9775C20.0721 22.3207 20.541 22.5818 21.0466 22.746C21.5683 22.915 22.1135 23.0004 22.6619 22.9991C23.4739 23.0184 24.2824 22.8858 25.0456 22.6079C25.647 22.3934 26.1827 22.0272 26.6011 21.5449L31.3732 23.2752C30.4215 24.712 29.0918 25.8585 27.5306 26.5886C26.0564 27.2828 24.4479 27.6457 22.8183 27.6516C21.3432 27.6687 19.8763 27.4289 18.4834 26.9429C17.2232 26.5027 16.0682 25.8053 15.0918 24.8951C14.1299 23.976 13.3779 22.8599 12.8875 21.6232C12.3459 20.2431 12.0786 18.7706 12.1006 17.2882C12.0832 15.8352 12.3701 14.3946 12.9428 13.0591ZM27.0566 15.36C27.0667 14.8167 26.9549 14.278 26.7295 13.7835C26.5042 13.289 26.171 12.8512 25.7543 12.5023C24.8973 11.8439 23.8387 11.5025 22.7585 11.5359C21.6828 11.5241 20.6299 11.8456 19.7443 12.4563C19.2841 12.7993 18.9033 13.2375 18.6278 13.7409C18.3522 14.2444 18.1884 14.8014 18.1475 15.3738L27.0566 15.36Z" fill="#FBFBFB"/>
            <path d="M69.1498 7.06752V13.0499C68.8755 13.0037 68.5991 12.9715 68.3215 12.9533C68.0868 12.9533 67.8245 12.9303 67.5346 12.9303C66.062 12.9303 64.9453 13.2662 64.1844 13.9381C63.4205 14.6053 63.0432 15.7282 63.0432 17.3066V27.1592H57.0608V7.61975H63.0432V10.726C63.4969 9.56611 64.3012 8.57672 65.3441 7.89585C66.501 7.24448 67.8269 6.95589 69.1498 7.06752Z" fill="#FBFBFB"/>
            <path d="M92.6423 7.61975H102.375V27.1684H96.3468V12.194H92.6423V7.61975Z" fill="#FBFBFB"/>
            <path d="M117.598 7.32517C118.448 7.49402 119.27 7.77893 120.042 8.17191C120.84 8.58515 121.571 9.11738 122.209 9.75034C122.913 10.4548 123.481 11.2832 123.884 12.1939L118.878 14.0071C118.646 13.2683 118.156 12.6377 117.497 12.2307C116.862 11.8856 116.149 11.7097 115.426 11.7199C114.88 11.7183 114.339 11.8182 113.829 12.0145C113.308 12.2185 112.843 12.5434 112.472 12.9624C112.037 13.4678 111.714 14.0589 111.524 14.6973C111.27 15.5464 111.151 16.4299 111.169 17.3158C111.147 18.2247 111.275 19.1312 111.547 19.9987C111.746 20.6428 112.075 21.2394 112.513 21.752C112.887 22.1609 113.352 22.4761 113.871 22.6724C114.366 22.8665 114.894 22.9664 115.426 22.9669C116.165 22.9944 116.898 22.8278 117.552 22.4837C118.124 22.161 118.601 21.6926 118.933 21.1261L123.82 22.8978C123.359 23.7431 122.759 24.504 122.044 25.1482C121.388 25.7346 120.652 26.2243 119.858 26.6023C119.1 26.966 118.299 27.2319 117.474 27.3939C116.681 27.5483 115.875 27.6269 115.067 27.6286C113.607 27.6549 112.156 27.4002 110.792 26.8784C109.598 26.4175 108.522 25.6977 107.64 24.7708C106.766 23.8334 106.106 22.7169 105.707 21.4989C105.26 20.1327 105.041 18.7024 105.058 17.2652C105.037 15.8316 105.283 14.4066 105.785 13.0637C106.24 11.8599 106.939 10.7632 107.838 9.84238C108.731 8.93901 109.805 8.23485 110.99 7.77616C112.29 7.27392 113.674 7.02554 115.067 7.04446C115.918 7.05504 116.766 7.14905 117.598 7.32517Z" fill="#FBFBFB"/>
            <path d="M144.234 27.1683H138.666L138.638 24.8076C137.951 25.7906 136.991 26.5506 135.877 26.9935C134.666 27.4449 133.381 27.665 132.089 27.6423C131.207 27.6497 130.33 27.5161 129.489 27.2466C128.707 27.0061 127.978 26.6188 127.34 26.1053C126.729 25.6137 126.231 24.995 125.882 24.2922C125.519 23.5441 125.338 22.7212 125.352 21.89C125.321 20.803 125.662 19.738 126.319 18.8712C127.036 17.9897 127.954 17.2936 128.997 16.8418C130.308 16.2643 131.685 15.8486 133.097 15.6039C134.819 15.2838 136.559 15.0656 138.307 14.9504V14.2003C138.307 13.0744 138.023 12.2798 137.455 11.8166C136.753 11.3135 135.897 11.0695 135.035 11.1263C134.272 11.1056 133.519 11.3053 132.867 11.7015C132.245 12.1023 131.805 12.7322 131.643 13.4548L126.581 11.6417C127.314 10.2442 128.455 9.10296 129.853 8.36978C131.604 7.4443 133.567 6.9952 135.545 7.06746C136.794 7.05153 138.039 7.19693 139.25 7.50004C140.256 7.75273 141.188 8.24 141.97 8.92201C142.73 9.61693 143.305 10.4898 143.645 11.4622C144.053 12.674 144.247 13.9481 144.215 15.2265L144.234 27.1683ZM135.932 23.3258C136.416 23.1896 136.861 22.9404 137.23 22.5987C137.625 22.2143 137.924 21.741 138.1 21.2182C138.326 20.4981 138.432 19.7455 138.412 18.9909V18.5307C137.391 18.6089 136.447 18.7147 135.596 18.8482C134.852 18.9513 134.119 19.1286 133.41 19.3774C132.897 19.5529 132.426 19.8352 132.03 20.2057C131.864 20.3736 131.734 20.5738 131.648 20.7939C131.563 21.0139 131.524 21.2492 131.533 21.4851C131.526 21.7844 131.595 22.0805 131.733 22.346C131.872 22.6115 132.075 22.8378 132.324 23.0037C132.902 23.4006 133.593 23.6007 134.294 23.5743C134.858 23.572 135.419 23.4883 135.96 23.3258H135.932Z" fill="#FBFBFB"/>
            <path d="M53.1077 27.1684H47.5395L47.5119 24.8076C46.8257 25.7912 45.8655 26.5513 44.7508 26.9935C43.5416 27.4446 42.2585 27.6647 40.9681 27.6424C40.0858 27.6497 39.2081 27.5161 38.368 27.2466C37.5857 27.0061 36.8563 26.6188 36.2189 26.1053C35.6072 25.6137 35.1094 24.9951 34.7602 24.2922C34.3961 23.5445 34.2132 22.7216 34.2263 21.89C34.1951 20.8031 34.5361 19.738 35.1927 18.8712C35.9116 17.9896 36.8317 17.2936 37.8756 16.8418C39.187 16.2643 40.5639 15.8486 41.9759 15.6039C43.6995 15.2838 45.4404 15.0656 47.1897 14.9505V14.2004C47.1897 13.0744 46.9075 12.2798 46.343 11.8166C45.6385 11.3135 44.7817 11.0696 43.9178 11.1263C43.1552 11.1069 42.403 11.3065 41.7504 11.7015C41.1301 12.1039 40.6923 12.7334 40.5309 13.4549L35.4688 11.6417C36.2015 10.2454 37.3409 9.10443 38.7362 8.3698C40.4873 7.44574 42.4499 6.99673 44.4286 7.06748C45.6769 7.05181 46.922 7.1972 48.1331 7.50005C49.1392 7.75274 50.0712 8.24002 50.8528 8.92202C51.613 9.61695 52.1886 10.4898 52.5279 11.4622C52.9365 12.6741 53.1296 13.9481 53.0985 15.2266L53.1077 27.1684ZM44.8152 23.3258C45.2992 23.1896 45.744 22.9404 46.1129 22.5987C46.5086 22.2143 46.8068 21.741 46.9827 21.2182C47.2093 20.4981 47.3151 19.7455 47.2956 18.9909V18.5307C46.2709 18.6105 45.3321 18.7163 44.4792 18.8482C43.7334 18.952 42.9997 19.1292 42.2888 19.3774C41.7763 19.5552 41.3062 19.8372 40.9082 20.2058C40.7438 20.3745 40.6153 20.575 40.5307 20.7949C40.446 21.0148 40.407 21.2496 40.4158 21.4851C40.4091 21.7844 40.4781 22.0806 40.6165 22.3461C40.7549 22.6116 40.9581 22.8378 41.2073 23.0037C41.7851 23.4015 42.476 23.6017 43.1769 23.5743C43.7382 23.5712 44.2961 23.4875 44.8336 23.3258H44.8152Z" fill="#FBFBFB"/>
            <path d="M151.643 22.0235H146.498V27.1684H151.643V22.0235Z" fill="#FBFBFB"/>
            <path d="M90.3138 15.268V27.1684H84.3313V16.7636C84.3313 16.0825 84.3083 15.4291 84.2715 14.8124C84.2433 14.2581 84.1236 13.7124 83.9172 13.1972C83.7267 12.7508 83.4059 12.3723 82.9968 12.1111C82.4869 11.8242 81.9059 11.6886 81.3217 11.72C80.7822 11.6794 80.2417 11.7839 79.7562 12.0226C79.2707 12.2613 78.8579 12.6255 78.5606 13.0775C77.9808 13.9979 77.6954 15.3324 77.6954 17.118V27.1684H71.713V7.61974H77.6954V10.2198C77.9376 9.81261 78.2349 9.44093 78.579 9.11534C78.9873 8.73085 79.4381 8.39426 79.9228 8.11212C80.4685 7.7959 81.0492 7.54419 81.6531 7.36203C82.3252 7.16322 83.0229 7.06399 83.7239 7.06751C84.7996 7.03521 85.8711 7.21665 86.8762 7.60132C87.6845 7.92939 88.3867 8.47395 88.9056 9.17515C89.4503 9.94688 89.8209 10.8277 89.9916 11.7568C90.217 12.9134 90.325 14.0897 90.3138 15.268Z" fill="#FBFBFB"/>
            </svg>
            </div>
        </div>
    );
}

export default safeArea