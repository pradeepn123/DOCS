import React from "react";
import ImageWithText from "JsComponents/image-with-text"
import Carousel from "JsComponents/Carousel";

export default ({ data }) => {

	const settings = JSON.stringify({
		"slidesPerView": 1,
		"spaceBetween": 10,
		"overflowNagivation": true,
		"breakpoints": {
			"768": {
				"navigation": true,
				"slidesPerView": 1,
				"spaceBetween": 27
			},
			"1200": {
				"navigation": true,
				"slidesPerView": 1,
				"spaceBetween": 27,
				"speed":600
			}
		}
	});
	const imageWithTextData = Object.values(data).map((item) => {
		let {
			heading = '',
			description,
			desktopImage,
			mobileImage,
			desktopratio,
			mobileratio,
			subheading = '',
			styleClass = 'style-1',
			mobileMediaGridColumn = 'span 4',
			desktopMediaGridColumn = 'span 4',
			mobilntentGridColumn = 'span 1',
			desktopContentGridColumn = 'span 1',
			url,
			button } = item || {};
		return {
			heading,
			description,
			subheading,
			url,
			button,
			styleClass,
			themeHeadingClasses: 'fs-heading-display-1 ff-heading',
			"default": {
				"media": {
					image: mobileImage || desktopImage,
					ratio: mobileratio,
					gridColumn: mobileMediaGridColumn,
					gridRow: 'span 1'
				},
				"content": {
					maxWidth: `500px`,
					textColor: 'white',
					background: 'transparent',
					gridColumn: mobileContentGridColumn,
					gridRow: 'span 1'
				}
			},
			"lg": {
				"media": {
					image: desktopImage || mobileImage,
					ratio: desktopratio,
					gridColumn: desktopMediaGridColumn,
					gridRow: 'span 1'
				},
				"content": {
					maxWidth: `500px`,
					textColor: 'white',
					background: 'transparent',
					gridColumn: desktopContentGridColumn,
					gridRow: 'span 1'
				}
			}
		}
	});



	return (
		<div className="banner banner--custom">
			<div className="banner__container">
				<div className="banner__header-content">
					<div>
						<custom-carousel>
							<div className="carousel__container swiper" data-swiper-container>
								<div className="swiper-wrapper">
										{imageWithTextData.map((eachData, index) =>
										<div className="swiper-slide" key={index}>
											<ImageWithText data={eachData} wrapperclassName="banner__slideshow" />
											</div>
										)}
								</div>
								<div className="swiper-pagination"></div>
								<div className="swiper-navigations" data-swiper-navigations></div>
							</div>
							<script data-settings type="text/json">
								 {settings}
							</script>
						</custom-carousel>
					</div>
				</div>
			</div>
		</div>
	)
}