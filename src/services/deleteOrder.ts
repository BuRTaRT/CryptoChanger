const deleteOrder = async (id: string) => {
    await fetch(`/api/order/${id}`, {
        method: 'DELETE'
    });

};
export default deleteOrder;