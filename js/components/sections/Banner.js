import React from "react";
import ImageWithText from "JsComponents/image-with-text"
import CarouselItems from "JsComponents/carousel-items";

export default ({ data }) => {

	const settings = JSON.stringify({
		"slidesPerView": 1,
		"spaceBetween": 10,
		"overflowNagivation": false,
		"speed":1000,
		"autoplay": {
			"delay": 3000
		},
		"breakpoints": {
			"768": {
				"slidesPerView": 1,
				"spaceBetween": 27
			},
			"1200": {
				"slidesPerView": 1,
				"spaceBetween": 27,
				"pagination": true,
				"autoplay": {
					"delay": 3000
				}
			}
		}
	});

	const carouselsettings = {
		paginationWrapperClass: 'swiper-pagination--bar'
	}
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
			mobileContentGridColumn = 'span 1',
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
		<div className="banner banner--custom" data-parent>
			<div className="banner__container">
				<div className="banner__header-content">
					<div>
						<custom-carousel>
							<CarouselItems settings={carouselsettings}>
								{imageWithTextData.map((eachData, index) => 
								<ImageWithText 
								enableTint={true}
								data={eachData} 
								wrapperClass="banner__slideshow" 
								key={index}/>)}
							</CarouselItems>
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