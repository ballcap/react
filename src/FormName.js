import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormName() {
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="f_name"
                placeholder="First Name"
                value={formData.f_name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="l_name"
                placeholder="Last Name"
                value={formData.l_name}
                onChange={handleChange}
                required
            />
            <input type="submit" value="POST" />
        </form>
    );
}

export default FormName;
