
const axios = require('axios');
const { response } = require('express');
const convertXmlToJson = require('xml-js')
const domain="http://3BATE125JJIX4M3I2NJSTVFCS9TS6GD9@18.219.54.186"

module.exports = {
    getOrders:
    async function getOrders(response) {
        try {
          const { data } = await axios.get(
            `${domain}/api/orders?display=full`
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
              `${domain}/api/carriers?display=full`
            );
            carriers = (convertXmlToJson.xml2js(data,{compact: true, spaces: 2}))
            response.json(carriers.prestashop.carriers)
          } catch (error) {
            console.log(error);
          }
        },
      getOderCarriers: 
      async function getOderCarriers(response) {
        try {
          let { data } = await axios.get(
            `${domain}/api/order_carriers?display=[id_order,id_carrier]`
          );
          order_carriers = (convertXmlToJson.xml2js(data,{compact: true, spaces: 2}))
          response.json(order_carriers.prestashop.carriers)
        } catch (error) {
          console.log(error);
        }
      }
}