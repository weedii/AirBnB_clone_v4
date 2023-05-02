$(document).ready(function () {
    $('input[type="checkbox"]').change(function () {
      const selectedAmenities = {}; 
      $('input[type="checkbox"]:checked').each(function () {
        const amenityId = $(this).closest('li').data('id');
        selectedAmenities[amenityId] = true;
      });
      $('input[type="checkbox"]:not(:checked)').each(function () {
        const amenityId = $(this).closest('li').data('id');
        delete selectedAmenities[amenityId];
      });
      $('#amenities h4').html('Amenities:').append($('<ul>').append(selectedAmenitiesList));
    });
  });
