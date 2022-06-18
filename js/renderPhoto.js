import { createElem } from './createElem.js'

export const renderPhoto = (photoWrapper, photo) => {
	const img = createElem('img', {
		className: 'photo__picture',
		src: photo.urls.regular,
		alt: photo.description || photo.alt_description,
		style: 'max-height: 80vh',
	})

	const authorLink = createElem('a', {
		className: 'photo__author',
		href: photo.user.links.html,
	})

	const photoAuthor = createElem('img', {
		src: photo.user.profile_image.medium,
		alt: photo.user.bio,
		title: photo.user.username,
	})

	const userName = createElem('span')
	userName.textContent = photo.user.username

	authorLink.append(photoAuthor, userName)

	const photoControl = createElem('div', {
		className: 'photo__control',
	})

	const likeBtn = createElem('button', {
		id: photo.id,
		className: 'photo__like',
		textContent: photo.likes,
	})

	if (!likeBtn.likedByUser) {
		likeBtn.classList.add('photo__like_o')
	}

	const linkDownload = createElem('a', {
		className: 'photo__download',
		download: true,
		href: photo.urls.raw,
		target: '_blank',
	})

	photoControl.append(likeBtn, linkDownload)

	photoWrapper.append(img, authorLink, photoControl)
}
