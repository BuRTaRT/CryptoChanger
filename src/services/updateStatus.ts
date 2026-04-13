const updateStatus = async (id: string, newStatus: string) => {
    await fetch(`/api/order/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({status: newStatus})
    });
};
export default updateStatus;