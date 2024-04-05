import { useState, useEffect } from "react"

const Form = () => {

    const [cimc, setCimc] = useState([]);

    const [name, setName] = useState('')
    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    
    const [imcResultado, setImcResultado] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const imc = (peso/((altura/100)*(altura/100))).toFixed(1);
        console.log("Valor del IMC:", imc); 

        let resultado="";
        if (imc < 18.5) {
            resultado = 'Bajo peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = 'Peso Normal';
        } else if (imc >= 25 && imc < 29.9) {
            resultado = 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
            resultado = 'Obesidad grado 1';
        } else if (imc >= 35 && imc < 39.9) {
            resultado = 'Obesidad grado 2';
        } else {
            resultado = 'Obesidad grado 3';
        }

        setImcResultado(resultado);

        const obtener = {
            name,
            genero,
            peso,
            altura,
            imc: resultado
        }

        setCimc([... cimc, obtener]);

        setName('')
        setGenero('');
        setPeso('');
        setAltura('');

        document.getElementById('imcForm').reset();
    }

    

    const resultado = () => {
        
    }

    return (
        <div className="flex flex-col p-5 border border-blue-400 rounded-lg shadow space-y-6">
            <form id='imcForm' onSubmit={handleSubmit}>
                <div className='text-gray-800'>
                    <div className='flex flex-row px-2 py-2'>
                        <label htmlFor="name">Nombre: </label>
                        <input type="text" name="name" id="name" 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='px-2 py-2'>
                        <label htmlFor="genero">Genero: </label>
                        <select name="genero" id="genero" onChange={(e) => setGenero(e.target.value)}>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div className='px-2 py-2'>
                        <label htmlFor="peso">Peso(kg): </label>
                        <input type="number" name='peso' id='peso' onChange={(e) => setPeso(e.target.value)} />
                    </div>
                    <div className='px-2 py-2'>
                        <label htmlFor="altura">Altura(cm): </label>
                        <input type="number" name="altura" id="altura" onChange={(e) => setAltura(e.target.value)} />
                    </div>
                    <div className="flex flex-row justify-between content-center items-center">
                        <button type='submit'
                            className="bg-blue-600 text-white font-bold rounded 
                            focus:outline-none shadow hover:bg-blue-600 transition-colors 
                            px-5 py-2 text-center w-full">
                            Calcular IMC
                        </button>
                    </div>
                </div>

            </form>

            <div id='resultado'  className="text-gray-600">
                
            {imcResultado && <p>Resultado del IMC: {imcResultado}</p>}
            
            </div>

        </div>
    )
}

export default Form