
function Table({ dataGroup1, dataGroup2, dataGroup3 }) {
    return (

        <div className="container mx-auto p-5">
            <h1 className="text-white mb-5">Última actualización: {dataGroup1[0].updated_at}</h1>

            <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Dirección</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bicis disponibles</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Bornes libres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataGroup1.map((result, i) => {
                                return(
                                    <tr key={i}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.address}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.available}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.free}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            dataGroup2.map((result, i) => {
                                return(
                                    <tr key={i}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.address}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.available}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.free}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            dataGroup3.map((result, i) => {
                                return(
                                    <tr key={i}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.address}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.available}</td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">{result.free}</td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>


    )
}

export default Table