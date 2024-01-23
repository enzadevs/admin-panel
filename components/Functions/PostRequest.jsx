export const usePostOrderStore = create ((set,get) => ({
    deliveryType: '',
    paymentMethod: '',
    city: '',
    address: '',
    name: '',
    phone: '',
    insta: '',
    email: '',
    comments: '',
    totalCost: '',
    updateDeliveryType: deliveryType => set(() => ({deliveryType: deliveryType})),
    updatePaymentMethod: paymentMethod => set(() => ({paymentMethod: paymentMethod})),
    updateCity: city => set(() => ({city: city})),
    updateAddress: address => set(() => ({address: address})),
    updateName: name => set(() => ({name: name})),
    updatePhone: phone => set(() => ({phone: phone})),
    updateInsta: insta => set(() => ({insta: insta})),
    updateEmail: email => set(() => ({email: email})),
    updateComments: comments => set(() => ({comments: comments})),
    updateTotalCost: totalCost => set(() => ({totalCost: totalCost})),
    POST_ORDER: async()=>{
        await fetch(`https://client.st.com.tm/api/orders`,{
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
                'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            CART: [1,2,3],
            address: get().address,
            comments: get().comments,
            deliveryType: get().deliveryType,
            email: get().email,
            insta: get().insta,
            name: get().name,
            paymentMethod: get().paymentMethod,
            phone: get().phone,
            totalCost: get().totalCost,
            city: get().city
            })
        })
    } 
}))