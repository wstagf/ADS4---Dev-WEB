function botaoCustomizado(
        {bntTexto, acao}: {bntTexto: string, acao: () => void},
    
    )  {
    return (
        <button onClick={acao}> 
            {bntTexto}
        </button>
    )
}

export default botaoCustomizado;