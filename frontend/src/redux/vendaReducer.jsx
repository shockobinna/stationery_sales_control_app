const initialState = {
  allVendas: [],
  produtos: [],
  clientes: [],
  vendedores: [],
  produtoFormatado: [],
  loading: false,
  deleteVendaStatus: false,
  editVendaStatus: false,
};

const vendaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VENDAS_REQUEST":
      // Set loading state to true when starting to fetch data
      return {
        ...state,
        loading: true,
      };
    case "ALL_VENDAS":
      // Update state with fetched vendas from API
      return {
        ...state,
        allVendas: action.payload,
        loading: false,
        deleteVendaStatus: false,
        editVendaStatus: false,
      };

    case "DELETE_VENDA":
      // Update venda
      return {
        ...state,
        allVendas: [
          ...state.allVendas,
          state.allVendas.filter((venda) => venda.id !== action.payload),
        ],
        deleteVendaStatus: true,
        loading: false,
      };
    // Update state with fetched produtos
    case "ADD_PRODUTOS":
      // Handle adding produtos
      return {
        ...state,
        produtos: action.payload,
        loading: false,
        deleteVendaStatus: false,
      };

    case "ADD_CLIENTES":
      // Handle adding clientes
      return {
        ...state,
        clientes: action.payload,
        loading: false,
        deleteVendaStatus: false,
      };

    case "ADD_VENDEDORES":
      // Handle adding vendedores
      return {
        ...state,
        vendedores: action.payload,
        loading: false,
        deleteVendaStatus: false,
      };

    case "SEARCH_PRODUTO":
      return {
        ...state,
        produtoFormatado: action.payload,
        loading: false,
        deleteVendaStatus: false,
      };

    case "EDITED_SUCCESSFULLY":
      return {
        ...state,
        editVendaStatus: action.payload,
        loading: false,
        deleteVendaStatus: false,
      };

    default:
      return state;
  }
};

export default vendaReducer;
