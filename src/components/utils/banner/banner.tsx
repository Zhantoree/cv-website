import React, {FC} from 'react';
import img from "../../../assets/img/me.png";
import './banner.scss'

interface BannerProps {
    outlined?: boolean;
}

const Banner: FC<BannerProps> = ({outlined = false}) => {
    return (
        <>
            {
                outlined
                    ?
                    <div className="banner banner_outlined">
                        <svg className="banner__image" viewBox="0 0 550 592" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="maskBorder" mask-type="alpha">
                                <path d="M263 48.1782C270.426 43.891 279.574 43.891 287 48.1782L501.157
      171.822C508.583 176.109 513.157 184.032 513.157 192.606V439.894C513.157
      448.468 508.583 456.391 501.157 460.678L287 584.322C279.574 588.609
      270.426 588.609 263 584.322L48.843 460.678C41.4174 456.391 36.843 448.468 36.843
      439.894V192.606C36.843 184.032 41.4174 176.109 48.843 171.822L263 48.1782Z" fill="black"/>
                            </mask>
                            <g mask="url(#maskBorder)">
                                <rect x="37" width="476" height="630" fill="url(#pattern2)"/>

                                <path d="M285 51.6423L499.157 175.286C505.345 178.859 509.157 185.461 509.157
      192.606V439.894C509.157 447.039 505.345 453.641 499.157 457.214L285
      580.858C278.812 584.43 271.188 584.43 265 580.858L50.843 457.214C44.655 453.641
      40.843 447.039 40.843 439.894V192.606C40.843 185.461 44.655 178.859 50.843
      175.286L265 51.6423C271.188 48.0697 278.812 48.0696 285 51.6423Z" stroke="black" stroke-width="10"/>
                            </g>

                            <rect x="37" width="476" height="300" fill="url(#pattern3)"/>

                            <defs>
                                <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
                                </pattern>

                                <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#imageBorder" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
                                </pattern>


                                <image id="imageBorder" width="640" height="940" href={img}/>
                            </defs>
                        </svg>
                    </div>
                    :
                    <div className="banner classic">
                        <svg className="banner__image" viewBox="0 0 550 591" xmlns="http://www.w3.org/2000/svg">
                            <mask id="maskBlob" mask-type="alpha">
                                <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>
                            </mask>
                            <g mask="url(#maskBlob)">
                                <path d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157
      170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157
      447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426
      587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843
      438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"/>

                                <rect style={{position: "relative",top: "100px",overflow: "hidden"}} x="37" width="476" height="630" fill="url(#pattern0)"/>
                            </g>

                            <rect x="37" width="476" height="300" fill="url(#pattern1)"/>

                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"/>
                                </pattern>

                                <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use href="#imageBlob" transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"/>
                                </pattern>

                                <image id="imageBlob" width="640" height="925" href={img}/>
                            </defs>
                        </svg>
                    </div>
            }
        </>
    );
};

export default Banner;