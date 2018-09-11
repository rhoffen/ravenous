const apiKey='TmEFQyZYfyXge3dEoUB0FBOgMr8O8ACP7PVkWBe4H8eyVYphT79bGvQYjmOa6yWfrL6FshluOsU6_8rDNpljrYdT2_VnirCC1MXCgioO055oVA8DACUHUT0QOp2WW3Yx';

const Yelp = {
  search (term, location, sortBy) {
    console.log(`${term} and ${location} and ${sortBy}`);
    console.log(`apiKey = ${apiKey}`);
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {
        Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          console.log(jsonResponse.businesses)
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.category,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      })
    }
  }
export default Yelp;
