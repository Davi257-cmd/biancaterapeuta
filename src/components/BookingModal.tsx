import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const reasons = [
  { id: "inchaco", label: "Reduzir inchaço e retenção de líquidos", emoji: "💧" },
  { id: "dores", label: "Aliviar dores e sensação de peso no corpo", emoji: "🌿" },
  { id: "ansiedade", label: "Relaxar e diminuir ansiedade", emoji: "🧘‍♀️" },
  { id: "completo", label: "Cuidar do corpo e das emoções ao mesmo tempo", emoji: "✨" },
];

const days = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const periods = [
  { id: "manha", label: "Manhã", time: "8h - 12h" },
  { id: "tarde", label: "Tarde", time: "13h - 17h" },
  { id: "noite", label: "Noite", time: "18h - 21h" },
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: "",
    day: "",
    period: "",
    name: "",
    whatsapp: "",
    city: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReasonSelect = (reasonId: string) => {
    setFormData({ ...formData, reason: reasonId });
    setStep(2);
  };

  const handleDaySelect = (day: string) => {
    setFormData({ ...formData, day });
  };

  const handlePeriodSelect = (period: string) => {
    setFormData({ ...formData, period });
    if (formData.day) {
      setStep(3);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const reasonLabel = reasons.find(r => r.id === formData.reason)?.label || "";
    const periodLabel = periods.find(p => p.id === formData.period)?.label || "";

    const message = encodeURIComponent(
      `Oi Bianca, tudo bem? Meu nome é ${formData.name}, sou de ${formData.city}. Quero agendar uma sessão do Método DrenoWoman para ${reasonLabel}, de preferência ${formData.day} no período da ${periodLabel}. Vi seu site e quero saber os horários disponíveis 🙏💖`
    );

    window.open(`https://wa.me/5524992635904?text=${message}`, "_blank");
    
    setTimeout(() => {
      setIsSubmitting(false);
      onClose();
      setStep(1);
      setFormData({ reason: "", day: "", period: "", name: "", whatsapp: "", city: "" });
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4">
      <div 
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-lg bg-gradient-nude rounded-t-2xl md:rounded-3xl shadow-2xl overflow-hidden animate-scale-in max-h-[85vh] md:max-h-[80vh]">
        {/* Header - smaller on mobile */}
        <div className="bg-gradient-to-r from-rose-light/50 to-nude-light p-4 md:p-6 border-b border-border">
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 md:top-4 md:right-4 p-1.5 rounded-full hover:bg-foreground/5 transition-colors"
          >
            <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
          </button>
          
          <h2 className="font-heading text-lg md:text-2xl font-semibold text-foreground">
            Agendar sua sessão ✨
          </h2>
          
          {/* Progress - melhorado para mobile e desktop */}
          <div className="mt-4 md:mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs md:text-sm font-medium text-muted-foreground">
                Passo {step} de 3
              </span>
              <span className="text-xs md:text-sm font-medium text-primary">
                {Math.round((step / 3) * 100)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center flex-1">
                  <div 
                    className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold transition-all shadow-sm ${
                      step >= s 
                        ? "bg-primary text-primary-foreground scale-110" 
                        : step === s - 1
                        ? "bg-primary/30 text-primary border-2 border-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step > s ? "✓" : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-1 mx-1 md:mx-2 rounded-full transition-all ${
                      step > s ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content - smaller padding on mobile */}
        <div className="p-4 md:p-6 max-h-[60vh] overflow-y-auto">
          {/* Step 1 - Reason */}
          {step === 1 && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-foreground font-medium text-sm md:text-base mb-3">
                Qual é o principal motivo do seu agendamento?
              </p>
              <div className="grid gap-2 md:gap-3">
                {reasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() => handleReasonSelect(reason.id)}
                    className={`w-full p-3 md:p-4 rounded-xl md:rounded-2xl border-2 text-left transition-all hover:border-primary hover:bg-rose-light/20 ${
                      formData.reason === reason.id 
                        ? "border-primary bg-rose-light/30" 
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="mr-1.5 text-sm">{reason.emoji}</span>
                    <span className="text-foreground text-xs md:text-sm">{reason.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 - Day and Period */}
          {step === 2 && (
            <div className="space-y-4 md:space-y-6 animate-fade-in">
              <div>
                <p className="text-foreground font-medium text-sm md:text-base mb-2 md:mb-3">
                  Melhor dia da semana:
                </p>
                <div className="grid grid-cols-2 gap-1.5 md:gap-2">
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => handleDaySelect(day)}
                      className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 text-xs md:text-sm transition-all hover:border-primary ${
                        formData.day === day 
                          ? "border-primary bg-rose-light/30" 
                          : "border-border bg-card"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-foreground font-medium text-sm md:text-base mb-2 md:mb-3">
                  Período preferido:
                </p>
                <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                  {periods.map((period) => (
                    <button
                      key={period.id}
                      onClick={() => handlePeriodSelect(period.id)}
                      className={`p-2 md:p-3 rounded-lg md:rounded-xl border-2 text-center transition-all hover:border-primary ${
                        formData.period === period.id 
                          ? "border-primary bg-rose-light/30" 
                          : "border-border bg-card"
                      }`}
                    >
                      <div className="font-medium text-foreground text-xs md:text-sm">{period.label}</div>
                      <div className="text-[10px] md:text-xs text-muted-foreground">{period.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 md:gap-3 pt-3 md:pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => setStep(1)}
                  className="flex-1 text-xs md:text-sm py-2 md:py-2.5"
                >
                  Voltar
                </Button>
                <Button 
                  onClick={() => formData.day && formData.period && setStep(3)}
                  disabled={!formData.day || !formData.period}
                  className="flex-1 bg-primary hover:bg-rose-dark text-xs md:text-sm py-2 md:py-2.5"
                >
                  Continuar
                </Button>
              </div>
            </div>
          )}

          {/* Step 3 - Personal Data */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 animate-fade-in">
              <p className="text-foreground font-medium text-sm md:text-base mb-3">
                Quase lá! Precisamos de alguns dados:
              </p>

              <div className="space-y-3 md:space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground text-xs md:text-sm">Nome completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    required
                    className="mt-1 bg-card border-border focus:border-primary text-sm h-9 md:h-10"
                  />
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-foreground text-xs md:text-sm">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(24) 99999-9999"
                    required
                    className="mt-1 bg-card border-border focus:border-primary text-sm h-9 md:h-10"
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="text-foreground text-xs md:text-sm">Cidade/Bairro *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Angra dos Reis - Centro"
                    required
                    className="mt-1 bg-card border-border focus:border-primary text-sm h-9 md:h-10"
                  />
                </div>
              </div>

              <div className="flex gap-2 md:gap-3 pt-3 md:pt-4">
                <Button 
                  type="button"
                  variant="outline" 
                  onClick={() => setStep(2)}
                  className="flex-1 text-xs md:text-sm py-2 md:py-2.5"
                >
                  Voltar
                </Button>
                <Button 
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.whatsapp || !formData.city}
                  className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs md:text-sm py-2 md:py-2.5"
                >
                  {isSubmitting ? "Abrindo..." : "Enviar pelo WhatsApp"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
