// Shared Interactive Domain Simulator Bar with Language Switcher Integration
function initDomainSimulator(currentActive) {
  const container = document.createElement('div');
  container.className = 'sticky top-0 z-50 bg-slate-950 text-slate-200 border-b border-slate-800 text-xs px-4 py-2 font-mono shadow-md';
  
  const rootPrefix = currentActive === 'group' ? './' : '../';
  const surveyorPrefix = currentActive === 'surveyor' ? './' : (currentActive === 'group' ? './surveyor/' : '../surveyor/');
  const maritimPrefix = currentActive === 'maritim' ? './' : (currentActive === 'group' ? './maritim/' : '../maritim/');

  container.innerHTML = `
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="flex h-2.5 w-2.5 relative">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="font-bold text-slate-300 hidden md:inline" data-i18n="shared.sim_title">SIMULASI MULTI-DOMAIN MEGA KARYA:</span>
        <span class="text-sky-400 font-semibold bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
          ${currentActive === 'group' ? '🌐 megakaryagroup.com (Holding)' : currentActive === 'surveyor' ? '⚓ surveyor.megakaryagroup.com' : '🚢 maritim.megakaryagroup.com'}
        </span>
      </div>

      <div class="flex items-center gap-2 overflow-x-auto py-0.5">
        <span class="text-slate-400 text-[11px] mr-1 hidden lg:inline" data-i18n="shared.sim_switch_label">Pindah Sub-Domain:</span>
        <a href="${rootPrefix}index.html" class="px-2.5 py-1 rounded transition-all flex items-center gap-1 ${currentActive === 'group' ? 'bg-sky-600 text-white font-semibold shadow' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'}">
          🏢 megakaryagroup.com
        </a>
        <a href="${surveyorPrefix}index.html" class="px-2.5 py-1 rounded transition-all flex items-center gap-1 ${currentActive === 'surveyor' ? 'bg-blue-600 text-white font-semibold shadow' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'}">
          🔍 surveyor
        </a>
        <a href="${maritimPrefix}index.html" class="px-2.5 py-1 rounded transition-all flex items-center gap-1 ${currentActive === 'maritim' ? 'bg-cyan-600 text-white font-semibold shadow' : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'}">
          ⚓ maritim
        </a>

        <!-- Embedded Language Switcher -->
        <div class="lang-switcher-container ml-2"></div>
      </div>
    </div>
  `;
  
  document.body.insertBefore(container, document.body.firstChild);
}
