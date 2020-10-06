
const axios = require('axios');
const { response } = require('express');
const convertXmlToJson = require('xml-js')


module.exports = {
    getOrders:
    async function getOrders(response) {
        try {
          const { data } = await axios.get(
            "http://3BATE125JJIX4M3I2NJSTVFCS9TS6GD9@18.219.54.186/api/orders?display=full"
          );
          orders = (convertXmlToJson.xml2js(data,{compact: true, spaces: 2}))
          response.json(orders.prestashop.orders)
        } catch (error) {
          console.log(error);
        }
      },
      getCarriers:
      async function getCarriers(response) {
          try {
            const { data } = await axios.get(
              "http://3BATE125JJIX4M3I2NJSTVFCS9TS6GD9@18.219.54.186/api/carriers?display=full"
            );
            carriers = (convertXmlToJson.xml2js(data,{compact: true, spaces: 2}))
            response.json(carriers.prestashop.carriers)
          } catch (error) {
            console.log(error);
          }
        }
}