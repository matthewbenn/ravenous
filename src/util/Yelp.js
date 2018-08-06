const apiKey = 'iGoNFhZNU8KI8svgohRiTG7iWF7zZuGhG5AZ8pXdbPRvFWSN_GidKJBrvZksU5aLGl46h_8hB1CLvRoe_QM88OFu0GegTcpQRFN8-I9pkR89NaybHkv-nk5GxSVnW3Yx';

const Yelp = {
  search(term,location,sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
       headers: {
         Authorization: `Bearer ${apiKey}`
       }
     }).then(response => {
       return response.json();
     }).then(jsonResponse => {
       if (jsonResponse.businesses) {
         return jsonResponse.businesses.map(business => {
           return {
             id: business.id,
             imageSrc: business.image_url,
             name: business.name,
             address: business.location.address1,
             city: business.location.city,
             state: business.location.state,
             zipCode: business.location.zip_code,
             category: business.categories[0].title,
             rating: business.rating,
             reviewCount: business.review_count
           };
         });
       }
     })
  }
};
export default Yelp;
