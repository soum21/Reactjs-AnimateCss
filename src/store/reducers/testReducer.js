const initialState = {
    projects: [
        {
          id: "1",
          product_name: "coin changer yellow",
          product_serial_number: "MCC01",
          buyer_name: "Mr.Chong",
          buyer_phone: "014566992",
          buyer_email: "chong@myproduct.com",
          date_of_purchase: "26/10/2019",
          warranty_period: "6months",
          remarks: "Good Condition"
        },
        {
          id: "2",
          product_name: "Bill Acceptor",
          product_serial_number: "MCC02",
          buyer_name: "Mr.Lew",
          buyer_phone: "014562122",
          buyer_email: "lew@myproduct.com",
          date_of_purchase: "27/10/2019",
          warranty_period: "6months",
          remarks: "Good Condition"
        },
        {
          id: "3",
          product_name: "coin changer blue",
          product_serial_number: "MCC03",
          buyer_name: "Mr.Faisal",
          buyer_phone: "0145662191",
          buyer_email: "faisal@myproduct.com",
          date_of_purchase: "28/10/2019",
          warranty_period: "12months",
          remarks: "Good Condition"
        },
        {
          id: "4",
          product_name: "coin changer yellow",
          product_serial_number: "MCC01",
          buyer_name: "Mr.Chong",
          buyer_phone: "014566992",
          buyer_email: "chong@myproduct.com",
          date_of_purchase: "26/10/2019",
          warranty_period: "6months",
          remarks: "Good Condition"
        },
        {
          id: "5",
          product_name: "coin changer yellow",
          product_serial_number: "MCC01",
          buyer_name: "Mr.Chong",
          buyer_phone: "014566992",
          buyer_email: "chong@myproduct.com",
          date_of_purchase: "26/10/2019",
          warranty_period: "6months",
          remarks: "Good Condition"
        }
      ]
}
 
const testReducer = (state=initialState,action)=>{
    return state
}

export default testReducer;