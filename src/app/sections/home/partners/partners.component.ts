import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  info = [];
  show = false;

  constructor() { }

  close(){
    this.show = false;
  }

  ripio(){
  this.show = !this.show;
    this.info = [
      {text: "Ripio is one of Latin America ́s leading crypto companies, offering blockchain-based brokerage, lending and trading services. Through its integration with RCN, Ripio users are able to access global liquidity for funding personal and business loans at competitive rates.", 
      title: "Ripio",
      subTitle:"Loan Origination"},
      ];  
  }

  bancor(){
  this.show = !this.show;
    this.info = [
      {text: "Bancor is one of the largest decentralized multi-asset liquidity networks on the blockchain ecosystem. Its token swapping technology enables RCN users to seamlessly lend and borrow funds in multiple currencies, reducing friction and expanding market possibilities.", 
      title: "Bancor Network",
      subTitle:"Liquidity Provision"},
      ];  
  }

  kyber(){
  this.show = !this.show;
    this.info = [
      {text: "Kyber is an on-chain liquidity protocol that allows decentralized token swaps to be integrated into any application. Its token swapping technology enables RCN users to seamlessly lend and borrow funds in multiple currencies, reducing friction and expanding market possibilities.", 
      title: "Kyber Network",
      subTitle:"Liquidity Provision"},
      ];  
  }

  zeppelin(){
  this.show = !this.show;
    this.info = [
      {text: "Zeppelin is one of the world’s top blockchain software development companies. Its rigorous auditing process guarantees RCN smart-contracts' compliance with the highest security standards within the industry.", 
      title: "Zeppelin",
      subTitle:"Security Auditing"},
      ];  
  }

  decentraland(){
  this.show = !this.show;
    this.info = [
      {text: "Decentraland is a virtual world where users can build and explore 3D creations, play games and socialize. Through its integration with RCN, Decentraland users are able to request mortgage loans to purchase LAND parcels on the Decentraland’s Marketplace.", 
      title: "Decentraland",
      subTitle:"Loan Origination"},
      ];  
  }

  metamask(){
  this.show = !this.show;
    this.info = [
      {text: "Metamask is an industry-wide recognized cryptocurrency web wallet, which acts as a bridge between Internet browsers and the Ethereum network. Its simple interface allows RCN lenders to connect with the platform and safely store or move their funds through the blockchain.", 
      title: "Metamask",
      subTitle:"Funds Management"},
      ];  
  }

  civic(){
  this.show = !this.show;
    this.info = [
      {text: "Civic is a decentralized identity service provider that employs blockchain technology to enable people to take control of their online identity. By integrating it to the network, RCN is able to provide its users with a private, secure and fully user-controlled KYC procedure.", 
      title: "Civic",
      subTitle:"Identity Management"},
      ];  
  }

  ethereum(){
  this.show = !this.show;
    this.info = [
      {text: "The Ethereum Enterprise Alliance is a growing community of blockchain leaders, adopters, innovators and developers from around the globe. As a member, RCN is granted access to top partnership and integration opportunities with key industry stakeholders.", 
      title: "Enterprise Ethereum Alliance",
      subTitle:"Ecosystem Integration"},
      ];  
  }

 







  ngOnInit() {
  }

}
