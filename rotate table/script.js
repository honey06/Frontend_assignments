const buttons = [...document.querySelectorAll(".grid button")];
      const button5 = buttons[4];
      const buttonLabels = buttons.map(button => button.textContent);

      button5.addEventListener("click", function() {
        const temp = buttonLabels[0];
        for (let i = 0; i < buttons.length - 1; i++) {
          buttons[i].textContent = buttonLabels[i + 1];
        }
        buttons[buttons.length - 1].textContent = temp;
        buttonLabels.unshift(buttonLabels.pop());
      });