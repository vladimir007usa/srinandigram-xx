import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FestivalCalendarContent from "./FestivalCalendarContent";
import { Calendar } from "lucide-react";

interface CalendarModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const CalendarModal = ({ trigger, open, onOpenChange }: CalendarModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden sm:rounded-2xl border-none shadow-2xl">
        <DialogHeader className="p-6 bg-primary text-primary-foreground">
          <DialogTitle className="flex items-center gap-2 font-heading text-xl">
            <Calendar className="w-6 h-6 text-secondary" />
            Festivals Calendar - Sri NandiGram
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto p-2 bg-cream-dark/20 h-full">
          <FestivalCalendarContent />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
