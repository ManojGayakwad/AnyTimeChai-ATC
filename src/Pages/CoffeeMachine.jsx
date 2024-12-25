import React, { useState } from 'react';
import { Coffee, CreditCard, Droplet, Milk } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

const MENU = {
  FilterCoffee: {
    ingredients: {
      water: 50,
      coffee: 18,
      milk: 100,
    },
    cost: 30,
  },
  MasalaChai: {
    ingredients: {
      water: 100,
      milk: 150,
      tea: 10,
    },
    cost: 20,
  },
  MadrasCoffee: {
    ingredients: {
      water: 50,
      milk: 200,
      coffee: 24,
    },
    cost: 35,
  },
  InstantCoffee: {
    ingredients: {
      water: 200,
      milk: 100,
      coffee: 15,
    },
    cost: 25,
  }
};

const CoffeeMachine = () => {
  const [resources, setResources] = useState({
    water: 1000,
    milk: 500,
    coffee: 200,
    tea: 100,
  });
  const [profit, setProfit] = useState(0);
  const [message, setMessage] = useState('');
  const [coins, setCoins] = useState({
    tenRupee: 0,
    fiveRupee: 0,
    twoRupee: 0,
    oneRupee: 0
  });

  const isResourceSufficient = (orderIngredients) => {
    for (const item in orderIngredients) {
      if (orderIngredients[item] > resources[item]) {
        setMessage(`Sorry, पर्याप्त ${item} नहीं है। (Not enough ${item})`);
        return false;
      }
    }
    return true;
  };

  const calculateTotal = () => {
    return (
      coins.tenRupee * 10 +
      coins.fiveRupee * 5 +
      coins.twoRupee * 2 +
      coins.oneRupee * 1
    );
  };

  const handleCoinChange = (coinType, value) => {
    setCoins(prev => ({
      ...prev,
      [coinType]: Math.max(0, parseInt(value) || 0)
    }));
  };

  const processTransaction = (drinkCost) => {
    const moneyReceived = calculateTotal();
    if (moneyReceived >= drinkCost) {
      const change = moneyReceived - drinkCost;
      setProfit(prev => prev + drinkCost);
      setMessage(`धन्यवाद! आपका बदला ₹${change} (Your change: ₹${change})`);
      setCoins({ tenRupee: 0, fiveRupee: 0, twoRupee: 0, oneRupee: 0 });
      return true;
    } else {
      setMessage("क्षमा करें, राशि अपर्याप्त है। (Insufficient amount)");
      return false;
    }
  };

  const makeCoffee = (drinkName) => {
    const drink = MENU[drinkName];
    
    if (isResourceSufficient(drink.ingredients)) {
      if (processTransaction(drink.cost)) {
        setResources(prev => {
          const newResources = { ...prev };
          for (const item in drink.ingredients) {
            newResources[item] -= drink.ingredients[item];
          }
          return newResources;
        });
        setMessage(`यह रहा आपका ${drinkName} ☕️। आनंद लीजिए! (Here's your ${drinkName}, enjoy!)`);
      }
    }
  };

  const ResourceDisplay = ({ icon, label, value, unit }) => (
    <div className="flex items-center gap-2">
      {icon}
      <span className="font-medium">{label}:</span>
      <span>{value}{unit}</span>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>चाय/कॉफी मशीन (Tea/Coffee Machine)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Resources Display */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <ResourceDisplay 
              icon={<Droplet className="w-4 h-4" />}
              label="पानी (Water)"
              value={resources.water}
              unit="ml"
            />
            <ResourceDisplay 
              icon={<Milk className="w-4 h-4" />}
              label="दूध (Milk)"
              value={resources.milk}
              unit="ml"
            />
            <ResourceDisplay 
              icon={<Coffee className="w-4 h-4" />}
              label="कॉफी (Coffee)"
              value={resources.coffee}
              unit="g"
            />
            <ResourceDisplay 
              icon={<CreditCard className="w-4 h-4" />}
              label="कमाई (Profit)"
              value={`₹${profit}`}
              unit=""
            />
          </div>

          {/* Drink Buttons */}
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(MENU).map(([name, info]) => (
              <button
                key={name}
                onClick={() => makeCoffee(name)}
                className="p-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                {name.replace(/([A-Z])/g, ' $1').trim()}
                <div className="text-sm">₹{info.cost}</div>
              </button>
            ))}
          </div>

          {/* Coin Inputs */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {Object.entries(coins).map(([coinType, value]) => (
              <div key={coinType} className="flex items-center gap-2">
                <label className="min-w-32">
                  {coinType === 'tenRupee' ? '₹10 Coins' :
                   coinType === 'fiveRupee' ? '₹5 Coins' :
                   coinType === 'twoRupee' ? '₹2 Coins' :
                   '₹1 Coins'}:
                </label>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => handleCoinChange(coinType, e.target.value)}
                  className="border rounded p-2 w-20"
                  min="0"
                />
              </div>
            ))}
          </div>

          {/* Total Display */}
          <div className="text-right font-bold">
            कुल राशि (Total): ₹{calculateTotal()}
          </div>

          {/* Message Display */}
          {message && (
            <Alert className="mt-4">
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CoffeeMachine;