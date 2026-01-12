import { useState, useEffect } from "react";

function TravelForm({ onAdd, editingTravel, onUpdate, onCancelEdit }) {
    const [form, setForm] = useState({
        name: '',
        country: '',
        city: '',
        date: '',
        image: '',
        rating: 5,
        memo: ''
    });

    useEffect(() => {
        if (editingTravel) {
            setForm(editingTravel);
        }
    }, [editingTravel]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.country || !form.city || !form.date) {
            alert('필수 항목을 모두 입력해주세요'); 
            return;
        }
        if (editingTravel) {
            onUpdate({...form, id: editingTravel.id})
        } else {
            const newTravel = {
                ...form,
                id: Date.now(),
                createdAt: new Date().toISOString()
            };
            onAdd(newTravel);
        }

        // setForm({
        //     name:'';
        // })
    }
}

