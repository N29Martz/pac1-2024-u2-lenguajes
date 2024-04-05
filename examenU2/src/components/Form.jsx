import { useState, useEffect } from "react"

const Form = () => {

    const [cimc, setCimc] = useState([]);

    const [name, setName] = useState('')
    const [genero, setGenero] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')

    const handleSubmit = (e) => {
        e.preventDefaul();

        const obtener = {
            nama,
            genero,
            peso,
            altura
        }

        setCimc([... cimc, obtener]);

        setName('')
        setGenero('');
        setPeso('');
        setAltura('');
    }

    const imc = peso/(altura*altura);

    const resultado = () => {
        if(imc > 18.5){
            console.log('Bajo peso')
        }

        if(imc > 18.5 || imc < 24.9){
            console.log('Peso Normal')
        }

        if(imc > 25 || imc < 29.9){
            console.log('Sobrepeso')
        }

        if(imc > 30 || imc < 34.9){
            console.log('Obesidad grado 1')
        }

        if(imc > 35 || imc < 39.9){
            console.log('Obesidad grado 2')
        }

        if(imc > 40){
            console.log('Obesidad grado 3')
        }
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

            <div id='resultado'>
                <label htmlFor="" className="text-gray-600">

                </label>
            </div>

        </div>
    )
}

export default Form