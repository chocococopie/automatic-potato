window.addEventListener("DOMContentLoaded", () => {

    const hideLabel = (tooltipContainer, fromId, toId) => {
        const tooltip = document.querySelector(tooltipContainer),
            fromInput = document.querySelector(fromId),
            toInput = document.querySelector(toId);

        tooltip?.addEventListener('focusin', () => {
            tooltip.classList.add('hide');
        });

        tooltip?.addEventListener('focusout', () => {
            if (!fromInput.value && !toInput.value) {
                tooltip.classList.remove("hide");
            }
        })
    }

    hideLabel('.tableTooltip', '#durationFrom', '#durationTo');
    hideLabel('.tableTooltip2', '#costFrom', '#costTo');

});
