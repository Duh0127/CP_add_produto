

export default function AdicionarProduto(){
    

    return(
        <main>
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Novo Produto</legend>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name='nome' id='idNome' />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name='desc' id='idDesc' />
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="number" min="0" name='preco' id='idPreco' />
                    </div>
                    <div>
                        <label htmlFor="idImg">Imagem:</label>
                        <input type="text" name='img' id='idImg' />
                    </div>
                    <button type="submit">Adicionar</button>
                </fieldset>
            </form>
        </main>
    )
}