export const timeSince = ( date: string ) => {

    const baseDate = new Date(date)

    const seconds = Math.floor(( new Date().getTime() - baseDate.getTime() ) / 1000);
      
    let interval = seconds / 31536000;
    
    if (interval > 1) {
        return Math.floor(interval) + " anos";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutos";
    }
    if (interval === 1) {
        return Math.floor(interval) + " minuto";
    }
    return Math.floor(seconds) + " segundos";
}