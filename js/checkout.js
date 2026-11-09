// Checkout simulado — Pix / Cartão. Nenhum dado é enviado a servidor algum.
let payMethod = 'pix';

function openCheckout(){
  if (getCart().length === 0){
    showToast('Sua sacola está vazia.');
    return;
  }
  document.getElementById('checkoutModal').classList.add('open');
  document.getElementById('checkoutBody').innerHTML = checkoutFormHTML();
}
function closeCheckout(){
  document.getElementById('checkoutModal').classList.remove('open');
}
function setPayMethod(method){
  payMethod = method;
  document.getElementById('checkoutBody').innerHTML = checkoutFormHTML();
}
function checkoutFormHTML(){
  const total = formatBRL(cartTotal());
  const payBlock = payMethod === 'pix'
    ? `<div class="pix-box">
         <div class="qr"></div>
         <div style="font-size:.85rem; color:var(--ink-soft);">Escaneie o QR Code no app do seu banco</div>
         <div style="font-weight:500; margin-top:6px;">${total}</div>
       </div>`
    : `<div class="field"><label>Número do cartão</label><input type="text" placeholder="0000 0000 0000 0000" maxlength="19"></div>
       <div style="display:flex; gap:10px;">
         <div class="field" style="flex:1;"><label>Validade</label><input type="text" placeholder="MM/AA" maxlength="5"></div>
         <div class="field" style="flex:1;"><label>CVV</label><input type="text" placeholder="123" maxlength="3"></div>
       </div>
       <div class="field"><label>Nome no cartão</label><input type="text" placeholder="Como está impresso no cartão"></div>`;

  return `
    <h3>Finalizar pedido</h3>
    <p class="sub">Site demonstrativo — nenhum pagamento real é processado.</p>
    <div class="pay-options">
      <div class="pay-opt ${payMethod==='pix'?'active':''}" onclick="setPayMethod('pix')">Pix</div>
      <div class="pay-opt ${payMethod==='cartao'?'active':''}" onclick="setPayMethod('cartao')">Cartão</div>
    </div>
    <div class="field"><label>Nome completo</label><input type="text" placeholder="Seu nome" id="ckName"></div>
    <div class="field"><label>WhatsApp</label><input type="text" placeholder="(35) 9 9999-9999"></div>
    ${payBlock}
    <button class="btn btn-solid btn-block" onclick="finishCheckout()">Confirmar pedido — ${total}</button>
  `;
}
function finishCheckout(){
  const name = (document.getElementById('ckName') || {}).value || '';
  document.getElementById('checkoutBody').innerHTML = `
    <div class="success-box">
      <div class="check">✓</div>
      <h3>Pedido simulado com sucesso${name ? ', ' + name.split(' ')[0] : ''}!</h3>
      <p class="sub">Em uma loja real, você receberia a confirmação por WhatsApp.<br>Fale com a Bella para fechar de verdade:</p>
      <a class="btn btn-solid btn-block" href="https://wa.me/5535998521829" target="_blank" rel="noopener">Chamar no WhatsApp</a>
    </div>
  `;
  localStorage.removeItem(CART_KEY);
  renderCartCount();
  renderCartDrawer();
}
