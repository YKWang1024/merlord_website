// Product Gallery - Category-based navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Magnific Popup with custom gallery groups
    $('.popup-gallery').each(function() {
        $(this).magnificPopup({
            delegate: '.popup-img',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
                tCounter: '%curr% of %total%'
            },
            callbacks: {
                beforeOpen: function() {
                    // Get the category of the clicked item
                    var clickedCategory = this.st.el.data('category');
                    
                    // If a category is specified, filter the gallery items
                    if (clickedCategory) {
                        var gallery = this.st.el.closest('.popup-gallery');
                        var items = [];
                        
                        // Find all images with the same category
                        gallery.find('.popup-img[data-category="' + clickedCategory + '"]').each(function() {
                            var item = {
                                src: $(this).attr('href')
                            };
                            items.push(item);
                        });
                        
                        // Replace the default gallery items with our filtered items
                        this.items = items;
                        
                        // Find the index of the clicked item in our filtered items
                        var index = 0;
                        for (var i = 0; i < items.length; i++) {
                            if (items[i].src === this.st.el.attr('href')) {
                                index = i;
                                break;
                            }
                        }
                        
                        this.index = index;
                        return false; // Prevent default behavior
                    }
                }
            }
        });
    });
});


