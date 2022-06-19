import { auth } from "./auth.js";
import { getData } from "./getData.js";
import { handlerlike } from "./handlerlike.js";
import { renderGallery } from "./renderGallery.js";
import { renderPhoto } from "./renderPhoto.js";

const init = async ({selectorGalleryWrapper, selectorPhotoWrapper, selectorAuthButton}) => {
	const galleryWrapper = document.querySelector(selectorGalleryWrapper)
	const photoWrapper = document.querySelector(selectorPhotoWrapper)
	const authButton = document.querySelector(selectorAuthButton)

	auth(authButton)

	if(galleryWrapper) {
		const photos = await getData({count: 30});
		renderGallery(galleryWrapper, photos)
	}

	if(photoWrapper) {
		const url = new URL(location.href)
		const idPhoto = url.searchParams.get('photo')

		if (idPhoto) {
			const photo = await getData({ idPhoto })
			const likeBtn = renderPhoto(photoWrapper, photo)

			likeBtn.addEventListener('click', () => {
				if (localStorage.getItem('Bearer')) handlerlike (likeBtn)
			})
		}


	}
}

init({
		selectorGalleryWrapper: '.gallery__wrapper',
		selectorPhotoWrapper: '.photo__wrapper',
		selectorAuthButton: '.header__login-button',
	})
