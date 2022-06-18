import { createCardPhoto } from './createCardPhoto.js';
import { creteElem } from './creteElem.js';

export const renderGallery = (wrapper, photos) => {
	const gallery = creteElem('ul', {
		className: 'grid'
	})

	wrapper.append(gallery)

	const grid = new Masonry( gallery, {
		gutter: 10,
		itemSelector: '.card',
		columnWidth: 200,
		isFitWidth: true,
	});

	const cards = photos.map((createCardPhoto))

	Promise.all(cards)
		.then(cards => {
			gallery.append(...cards)
			grid.appended( cards )
		})
}
