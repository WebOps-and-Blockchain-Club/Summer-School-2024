import { ethers } from 'ethers';
import { useState } from 'react';
import { ABI } from './utils/abi';
import ConnectButton from './components/ConnectButton';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ContractActions from './components/ContractActions';
import './App.css';


function App() {
  const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS?.toString() || '';

  const [user, setUser] = useState(null);
  const [contract, setContract] = useState(null);
  const [products, setProducts] = useState([]);

  const initialize = async () => {
    try {
      let signer = null;
      let provider;
      if (window.ethereum == null) {
        console.log('MetaMask not installed; using read-only defaults');
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        setUser(signer);
      }
    } catch (error) {
      console.error('Error getting the data: ', error);
    }
  };

  const initializeContract = async () => {
    try {
      if (user) {
        const con = new ethers.Contract(contractAddress, ABI, user);
        setContract(con);
        loadProducts(con);
      } else {
        console.error('User is not initialized');
      }
    } catch (error) {
      console.error("Error connecting with the contract", error)
    }
    
  };

  const loadProducts = async (contract) => {
      const productCount = await contract.nextProductId();
      const productsArray = [];
      for (let i = 0; i < productCount; i++) {
        const product = await contract.products(i);
        if(!product.purchased){
          productsArray.push({
            id: product.id,
            name: product.name,
            description: product.description,
            price: ethers.formatEther(product.price),
            seller: product.seller,
            buyer: product.buyer,
            purchased: product.purchased
          });
        }
      }
      setProducts(productsArray);
  };

  const postProduct = async (name, description, price) => {
    try {
      if (contract) {
        const tx = await contract.postProduct(name, description, ethers.parseEther(price));
        await tx.wait();
        loadProducts(contract); // Refresh products after posting
      }
    } catch (error) {
      console.error("Error posting the product :",error)
    }
    
  };

  const purchaseProduct = async (productId) => {
    try {
      if (contract) {
        const product = products.find(p => p.id === productId);
        const tx = await contract.purchaseProduct(productId, { value: ethers.parseEther(product.price) });
        await tx.wait()
        loadProducts(contract);
      }
    } catch (error) {
      console.error("Error purchasing the product :", error)
    }
  };

  const deleteProduct = async (productId) => {
    try {
      if (contract) {
        const tx = await contract.deleteProduct(productId);
        await tx.wait();
        loadProducts(contract); // Refresh products after deleting
      }
    } catch (error) {
      console.error("Error deleting the product :", error)
    }
    
  };

  return (
    <div className="container">
      <h1>Ethereum Marketplace</h1>
      <ConnectButton initialize={initialize} user={user} />
      <ContractActions initializeContract={initializeContract} contract={contract} />
      <ProductForm postProduct={postProduct} />
      <ProductList user={user} products={products} purchaseProduct={purchaseProduct} deleteProduct={deleteProduct}/>
    </div>
  );
}

export default App;
