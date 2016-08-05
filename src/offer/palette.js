(function($, Vue, Core, Widgets) {

    var BigOfferWidget =
    Widgets.Widget(Widgets.OffersGroup, Widgets.create({
        name: 'academy-offer-big',
        tag: 'academy-offer-big',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'image', title: 'Image', type: 'string', tab: 'data' },
            { name: 'title', title: 'Title', type: 'string', tab: 'data' },
            { name: 'promo', title: 'Promo', type: 'rich', tab: 'data' },
            { name: 'price', title: 'Price', type: 'string', tab: 'data' },
            { name: 'url', title: 'Button URL', type: 'string', tab: 'data' },
            { name: 'button', title: 'Button Title ', type: 'string', tab: 'data' },
        ],
    }));

    var BigOfferWidgetFactory = function(image) {

        return Widgets.build(BigOfferWidget, {
            image: { value: image },
            title: { value: 'Tuition Breaks' },
            price: { value: 'from as little as £265' },
            url: { value: 'http://google.com' },
            button: { value: 'Find out more' },
            promo: { value: `
                <p>Our tuition breaks offer you the opportunity for intensive
                residential golf tuition in small groups. We cater for all
                abilities and run our courses 7 days a week all year round.
                Ideal for players of all levels.</p>
            ` },
            inner: {
                value: { background: { value: '#266181' } },
            },
            width: { value: '600px' },
        });
    }


    Widgets.Item(Widgets.OffersGroup, {
        name: 'academy-offer-big',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/offer/offer-big.png',
        widget: BigOfferWidgetFactory("url('/assets/vendor/ntr1x-archery-widgets-academy/src/offer/img/offer.jpg') no-repeat"),
    });

    var SmallOfferWidget =
    Widgets.Widget(Widgets.OffersGroup, Widgets.create({
        name: 'academy-offer-small',
        tag: 'academy-offer-small',
        mixins: [ Widgets.WidgetMixin, Widgets.BoxMixin, Widgets.SizeMixin ],
        props: [
            { name: 'title', title: 'Title', type: 'string', tab: 'data' },
            { name: 'url', title: 'Button URL', type: 'string', tab: 'data' },
            { name: 'button', title: 'Button Title ', type: 'string', tab: 'data' },
        ],
    }));

    var SmallOfferWidgetFactory = function(background) {

        return Widgets.build(SmallOfferWidget, {
            title: { value: 'Online Booking' },
            url: { value: 'http://google.com' },
            button: { value: 'Book your course' },
            inner: {
                value: {
                    background: { value: background },
                    padding: { value: '15px' },
                },
            },
        });
    }

    Widgets.Item(Widgets.OffersGroup, {
        name: 'academy-offer-small',
        thumbnail: '/assets/vendor/ntr1x-archery-widgets-academy/src/offer/offer-small.png',
        widget: SmallOfferWidgetFactory("#164767 url('/assets/vendor/ntr1x-archery-widgets-academy/src/offer/img/brochure.png') no-repeat top right"),
    });

})(jQuery, Vue, Core, Widgets);
